/* RENDER THE WORLD AS A DOCUMENT, ON DEMAND.

   The world's single source of truth is `var BIBLE` in corpus.js, plus the `canon:` lines
   on each beat. This tool prints them as one readable markdown file when somebody wants to
   read the whole world in one go.

   THE OUTPUT IS NOT KEPT IN THE REPO, AND THAT IS DELIBERATE. A committed copy of the bible
   is a SECOND copy, and the last one drifted from its source inside a day. Generate it, read
   it, delete it. If you find a checked-in THE-WORLD.md, it is already stale.

     node tools-gen-world.js            -> writes THE-WORLD.md beside this file
     node tools-gen-world.js <path>     -> writes it wherever you say (a scratch dir)

   Two sources, and the difference matters:
     var BIBLE  - the briefing the storyteller is given. Includes things NOT YET on the page.
     canon:[]   - what a run writes into its own record when a beat closes. These have
                  reached the player and cannot be contradicted. */
var vm = require("vm"), fs = require("fs"), path = require("path");
var G = {};
vm.createContext(G);
vm.runInContext(fs.readFileSync(path.join(__dirname, "corpus.js"), "utf8"), G);

var OUT = process.argv[2] || path.join(__dirname, "THE-WORLD.md");
var NL = String.fromCharCode(10);
var BIB = Array.isArray(G.BIBLE) ? G.BIBLE : String(G.BIBLE).split(NL);
var out = [];

out.push("# MUDSKIPPERS — the world");
out.push("");
out.push("> **GENERATED, AND NOT PART OF THE REPO.** A verbatim mirror of `var BIBLE` in");
out.push("> `corpus.js` plus every `canon:` line. Edit the source, never this. Regenerate with");
out.push("> `node tools-gen-world.js`, and do not commit the result — a second copy of the");
out.push("> bible drifts.");
out.push("");
out.push("- **`var BIBLE`** — the storyteller's briefing: the founding, the cast’s truth, the");
out.push("  annulment, the rules. **Includes things not yet on the page.**");
out.push("- **`canon:` lines** — what a run writes into its own record at beat close. These have");
out.push("  reached the player and **cannot be contradicted**.");
out.push("");
out.push("---");
out.push("");
out.push("## Part one — `var BIBLE`, verbatim");

BIB.forEach(function(line){
  if (!line || !line.replace(/\s/g, "")) { out.push(""); return; }
  if (line.charAt(0) !== "-" && /:$/.test(line.replace(/\s+$/, ""))) {
    out.push("");
    out.push("### " + line.replace(/:\s*$/, ""));
    out.push("");
  } else {
    out.push(line);
  }
});

out.push("");
out.push("---");
out.push("");
out.push("## Part two — every `canon:` line, in beat order");
out.push("");
out.push("*`mergeCanon` makes these true at beat close. A beat may not state a fact a later");
out.push("beat exists to reveal — the `sealedLeaks` lint enforces it.*");

var book = "";
G.SPINE.forEach(function(b, i){
  var lines = (b.canon || []).concat(b.canonAlt || [], b.canonA || [], b.canonB || [], b.canonSoft || []);
  if (!lines.length && !b.stone) return;
  var nb = b.season === 1 ? "Book One" : b.season === 2 ? "Book Two" : "Book Three";
  if (nb !== book) { book = nb; out.push(""); out.push("### " + book); }
  out.push("");
  out.push("**`" + b.id + "` — " + b.title + "**  *(beat " + i + ")*");
  out.push("");
  lines.forEach(function(l){ out.push("- " + l); });
  if (b.stone) out.push("- **STONE:** " + b.stone);
});
out.push("");

fs.writeFileSync(OUT, out.join(NL), "utf8");
console.log(OUT + ": " + out.length + " lines, from " + BIB.length +
            " bible lines and " + G.SPINE.length + " beats");
