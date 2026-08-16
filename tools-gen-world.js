/* THE-WORLD.md is a VERBATIM MIRROR of the world truth inside index.html. It is generated,
   never hand-written - a hand-written copy drifts, and a drifted bible is worse than none.
   Sources, both in index.html:
     var BIBLE   - the DM briefing: the founding, the cast's truth, the annulment, the rules
     canon:[]    - per beat, what has actually reached the page and cannot be contradicted
   Regenerate after ANY edit to either:  node gen_world.js  */
var G = require('./ctx.js')();
if (G.__loadError) { console.log('LOAD ERROR: ' + G.__loadError); process.exit(1); }
var fs = require('fs');

var BIB = Array.isArray(G.BIBLE) ? G.BIBLE : String(G.BIBLE).split(String.fromCharCode(10));
var out = [];

out.push('# MUDSKIPPERS \u2014 the world');
out.push('');
out.push('> **GENERATED FILE \u2014 do not edit by hand.** A verbatim mirror of the world truth');
out.push('> inside `index.html`. Edit the source there, then run `gen_world.js` again.');
out.push('> Generated ' + new Date().toISOString().slice(0, 10) + ' from `var BIBLE` (' +
         BIB.length + ' lines) and ' + G.SPINE.length + ' beats.');
out.push('');
out.push('Two sources, and the difference matters:');
out.push('');
out.push('- **`var BIBLE`** \u2014 the briefing the storyteller is given: the founding, the');
out.push('  cast\u2019s truth, the annulment, the rules. Includes things **not yet on the page**.');
out.push('- **`canon:` lines** \u2014 what a run writes into its own record when a beat closes.');
out.push('  These have reached the player and **cannot be contradicted**.');
out.push('');
out.push('---');
out.push('');
out.push('## Part one \u2014 `var BIBLE`, verbatim');

BIB.forEach(function(line){
  if (!line || !line.replace(/\s/g, '')) { out.push(''); return; }
  if (line.charAt(0) !== '-' && /:$/.test(line.replace(/\s+$/, ''))) {
    out.push('');
    out.push('### ' + line.replace(/:\s*$/, ''));
    out.push('');
  } else {
    out.push(line);
  }
});

out.push('');
out.push('---');
out.push('');
out.push('## Part two \u2014 every `canon:` line, in beat order');
out.push('');
out.push('*`mergeCanon` makes these true at beat close. A beat may not state a fact a later');
out.push('beat exists to reveal \u2014 the `sealedLeaks` lint enforces it.*');

var book = '';
G.SPINE.forEach(function(b, i){
  var lines = (b.canon || []).concat(b.canonAlt || [], b.canonA || [], b.canonB || [], b.canonSoft || []);
  if (!lines.length && !b.stone) return;
  var nb = b.season === 1 ? 'Book One' : b.season === 2 ? 'Book Two' : 'Book Three';
  if (nb !== book) { book = nb; out.push(''); out.push('### ' + book); }
  out.push('');
  out.push('**`' + b.id + '` \u2014 ' + b.title + '**  *(beat ' + i + ')*');
  out.push('');
  lines.forEach(function(l){ out.push('- ' + l); });
  if (b.stone) out.push('- **STONE:** ' + b.stone);
});
out.push('');

fs.writeFileSync('C:/Users/aydin/Desktop/Upskill/mudskippers_text_rpg/THE-WORLD.md',
                 out.join(String.fromCharCode(10)), 'utf8');
console.log('THE-WORLD.md: ' + out.length + ' lines, from ' + BIB.length +
            ' bible lines and ' + G.SPINE.length + ' beats');
