//Exit monitor disabled mert annoying : line 560
$(document).ready(function(){
    $("body").prepend("<div id='printerOnly'><strong>Source: Ruwix.com</strong> <br />" + window.location.href + "</div>");
        
    $("#sidebarContent").html('<header id="header"><div class="logo"><a href="/"><img src="/img/logo.png" alt="ruwix logo" /><strong>Ruwix</strong><br />Twisty&nbsp;Puzzle&nbsp;Wiki</a></div></header><div id="mobileMenuTrigger" class="onlyMobile">Menu <span>&equiv;</span></div><div class="navigation"><div id="topOfNavBar"></div><ul><li><a href="/">Home page</a></li><li><a href="/rubiks-cube-programs/">Programs</a></li><li><a href="/the-rubiks-cube/">Rubik\'s Cube</a></li><li><a href="/twisty-puzzles/">Twisty Puzzles</a></li></ul><div class="sideBarWikiMenu"><ul><li><a href="/rubiks-cube-programs/">Rubik\'s Programs</a><ul><li><a href="/online-rubiks-cube-solver-program/">Cube Solvers</a></li><li><a href="/online-rubiks-stopwatch-timer/">Stopwatch Timer</a></li><li><a href="/puzzle-scramble-generator/">Puzzle Scrambler</a></li><li><a href="/rubiks-cube-mosaic-generator/">Mosaic Generator</a></li><li><a href="/online-puzzle-simulators/">Puzzle Simulators</a></li><li><a href="/rubiks-cube-widgets/">Widgets</a></li></ul></li><li><a href="/the-rubiks-cube/">Rubik\'s Cube</a><ul><li><a href="/the-rubiks-cube/cubing-terminology-abbreviations-commonly-used-expressions/">Cubing Terminology</a></li><li><a href="/the-rubiks-cube/faq/">FAQ</a></li><li><a href="/the-rubiks-cube/notation/">Notation</a><ul><li><a href="/the-rubiks-cube/notation/advanced/">Advanced</a></li></ul></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/">Beginner\'s Solution</a><ul><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-1-first-layer-edges/">1: First layer edges</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-2-first-layer-corners/">2: First layer corners</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step3-second-layer-f2l/">3: Second layer (F2L)</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-4-yellow-cross/">4: Yellow cross</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-5-swap-yellow-edges/">5: Swap the yellow edges</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/step-6-position-yellow-corners/">6: Position yellow corners</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/orient-yellow-corners-how-to-solve-last-layer-corner/">7: Orient last layer corners</a></li></ul></li><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/">Advanced Method</a><ul><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/white-cross/">White cross</a></li><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/first-two-layers-f2l/">First two layers - F2L</a></li><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/orient-the-last-layer-oll/">Orient the last layer - OLL</a></li><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/permutate-the-last-layer-pll/">Permutate the last layer - PLL</a></li></ul></li><li><a href="/the-rubiks-cube/fmc-fewest-move-count-challenge-method-tips/">Fewest Move Count</a></li><li><a href="/the-rubiks-cube/one-handed/">One-Handed</a></li><li><a href="/the-rubiks-cube/feet/">Feet Event</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-blindfolded-tutorial/">Blindfolded Tutorial</a></li><li><a href="/the-rubiks-cube/different-rubiks-cube-solving-methods/">Solving Methods</a><ul><li><a href="/the-rubiks-cube/different-rubiks-cube-solving-methods/roux-method/">Roux Method</a></li><li><a href="/the-rubiks-cube/different-rubiks-cube-solving-methods/zz-method/">ZZ Method</a></li><li><a href="/the-rubiks-cube/different-rubiks-cube-solving-methods/metha-method/">Metha Method</a></li></ul></li><li><a href="/online-rubiks-cube-solver-program/">Rubik\'s Solver</a></li><li><a href="/the-rubiks-cube/tricks/">Tricks</a></li><li><a href="/the-rubiks-cube/fingertricks/">Finger Tricks</a></li><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/">Patterns</a><ul><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/more-rubiks-patterns/">More 3x3 Patterns</a></li><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/twisty-puzzle-patterns/">Twisty Puzzle Patterns</a></li></ul></li><li><a href="/online-rubiks-stopwatch-timer/">Cube Timer</a></li><li><a href="/puzzle-scramble-generators/rubiks-cube-scrambler/">Cube Scrambler</a></li><li><a href="/the-rubiks-cube/my-rubiks-cube-collection-custom-twisty-puzzles/">Collections</a></li><li><a href="/the-rubiks-cube/popular-culture/">Popular Culture</a><ul><li><a href="/the-rubiks-cube/popular-culture/art/">Rubik\'s Cube in Arts</a></li><li><a href="/the-rubiks-cube/popular-culture/rubikubism-pixel-art-mosaic/">Rubikubism - Rubik\'s Mosaics</a></li><li><a href="/the-rubiks-cube/popular-culture/statues/">Statues</a></li><li><a href="/the-rubiks-cube/popular-culture/in-movies/">Rubik\'s Cube in Movies</a></li><li><a href="/the-rubiks-cube/popular-culture/rubiks-cube-music-videos/">Rubik\'s Cube in Music Videos</a></li><li><a href="/the-rubiks-cube/popular-culture/commercials/">Commercials</a></li><li><a href="/the-rubiks-cube/popular-culture/buildings-architecture/">Architecture</a></li></ul></li><li><a href="/the-rubiks-cube/analizing-popularity-of-rubiks-cube-using-google-tools-gender-age-language-location/">Popularity</a></li><li><a href="/the-rubiks-cube/the-inventor-rubik-erno-1974-budapest-hungary/">Erno Rubik - Inventor</a></li><li><a href="/the-rubiks-cube/first-rubiks-cube-prototype-invention/">First Prototype</a></li><li><a href="/the-rubiks-cube/rubiks-cube-patent-intellectual-property/">Patent</a></li><li><a href="/the-rubiks-cube/history-rubiks-cube/">History</a><ul><li><a href="/the-rubiks-cube/history-rubiks-cube/important-dates-timeline/">Important dates timeline</a></li><li><a href="/the-rubiks-cube/history-rubiks-cube/cubing-hardware/">Cubing hardware evolution</a></li></ul></li><li><a href="/the-rubiks-cube/beyond-rubiks-cube-exhibition/">Exhibition</a></li><li><a href="/the-rubiks-cube/museum/">Museum</a></li><li><a href="/the-rubiks-cube/algorithm/">Algorithm</a></li><li><a href="/the-rubiks-cube/mathematics-of-the-rubiks-cube-permutation-group/">Mathematics</a></li><li><a href="/the-rubiks-cube/herbert-kociemba-optimal-cube-solver-cube-explorer/">Cube Explorer</a></li><li><a href="/the-rubiks-cube/commutators-conjugates/">Commutators &amp; Conjugates</a></li><li><a href="/the-rubiks-cube/unsolvable-rubiks-cube-invalid-scramble/">Unsolvable Cube</a></li><li><a href="/the-rubiks-cube/gods-number/">God\'s Number</a></li><li><a href="/the-rubiks-cube/speedcubing-speedsolving/">Speedcubing</a></li><li><a href="/the-rubiks-cube/rubiks-cube-competitions-wca/">Competitions</a></li><li><a href="/the-rubiks-cube/world-cube-association-wca/">World Cube Association</a></li><li><a href="/the-rubiks-cube/rubik-speedsolving-association-rsa/">Speedsolving Association</a></li><li><a href="/the-rubiks-cube/rubiks-cube-competition-day-schedule-what-to-expect/">A Competition Day</a></li><li><a href="/the-rubiks-cube/wca-regulations/">Regulations</a></li><li><a href="/the-rubiks-cube/guide-wca-solves/">A WCA Solve</a></li><li><a href="/the-rubiks-cube/red-bull/">Red Bull</a></li><li><a href="/the-rubiks-cube/history-of-the-world-record-evolution/">World Records</a></li><li><a href="/the-rubiks-cube/speedcubers/">Speedcubers</a><ul><li><a href="/the-rubiks-cube/speedcubers/feliks-zemdegs/">Feliks Zemdegs</a></li></ul></li><li><a href="/the-rubiks-cube/cubing-personalities-erno-rubik-minh-thai-jessica-fridrich-feliks-zemdegs-ron-van-bruchem/">Cubing Personalities</a></li><li><a href="/the-rubiks-cube/speedcube-stackmat-timer-stopwatch/">Stackmat Timers</a></li><li><a href="/the-rubiks-cube/how-take-apart-disassemble-the-rubiks-cube-and-put-back-together/">Assemble</a></li><li><a href="/the-rubiks-cube/lubricate-rubiks-cube-with-silicone-or-vaseline-petroleum-jelly/">Lubrication</a></li><li><a href="/the-rubiks-cube/corner-cutting/">Corner Cutting</a></li><li><a href="/the-rubiks-cube/rubiks-cube-stickers-cubesmith/">Stickers</a></li><li><a href="/the-rubiks-cube/twisty-puzzle-sticker-calculator/">Sticker Calculator</a></li><li><a href="/the-rubiks-cube/japanese-western-color-schemes/">Color Schemes</a></li><li><a href="/the-rubiks-cube/rubiks-cube-image-generator-icube-picube-josef-jelinek-and-gilles-roux-php-code/">Image Generator</a><ul><li><a href="/the-rubiks-cube/rubiks-cube-image-generator-icube-picube-josef-jelinek-and-gilles-roux-php-code/download-source-code/">Download Source Code</a></li></ul></li><li><a href="/rubiks-cube-widgets/">Widgets</a></li><li><a href="/the-rubiks-cube/rubiks-themed-gifts-souvenirs/">Rubik\'s Gifts</a></li><li><a href="/the-rubiks-cube/you-can-do-the-cube/">You Can Do the Cube</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/">Funny Images / Memes</a><ul><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-memes-page-2/">Page 2</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-memes-page-3/">Page 3</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-memes-funny-images-page-4/">Page 4</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-jokes-page-5/">Page 5</a></li><li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-jokes-page-6/">Page 6</a></li><a href="/the-rubiks-cube/rubiks-cube-memes/rubiks-cube-jokes-page-7/">Page 7</a></li></ul></li><li><a href="/the-rubiks-cube/celebrities-actors-politicians-artists/">Cubing Celebrities</a></li><li><a href="/the-rubiks-cube/lego-rubiks-cube-robots-rubot2/">Robots</a></li><li><a href="/the-rubiks-cube/juggling/">Juggling</a></li><li><a href="/the-rubiks-cube/magic-tricks/">Magic Tricks</a></li><li><a href="/the-rubiks-cube/rubiks-cube-quiz/">Puzzle Quiz</a></li><li><a href="/the-rubiks-cube/the-best-cubing-youtube-channels-speedcubing-vloggers-youtubers-video-bloggers/">YouCubers - YouTube Channels</a></li><li><a href="/the-rubiks-cube/puzzle-stores-webshops-around-the-world-where-to-buy-rubiks-cubes/">Online Stores</a></li><li><a href="/the-rubiks-cube/the-best-speedcube-competition-cubes-moyu-dayan-shengshou-yuxin/">Speedcube Brands</a></li><a href="/the-rubiks-cube/the-best-speedcube-competition-cubes-moyu-dayan-shengshou-yuxin/magnetic-cubes/">Magnetic Cubes</a></li><li><a href="/the-rubiks-cube/essay/">Essay</a></li><li><a href="/the-rubiks-cube/curriculum/">Curriculum for Teachers</a><ul><li><a href="/the-rubiks-cube/curriculum/intro/">Introduction</a></li><li><a href="/the-rubiks-cube/curriculum/cross/">Cross</a></li><li><a href="/the-rubiks-cube/curriculum/f2l/">First 2 Layers</a></li><li><a href="/the-rubiks-cube/curriculum/top-edges/">Top Edges</a></li><li><a href="/the-rubiks-cube/curriculum/final-corners/">Final Corners</a></li></ul></li><li><a href="/competition/">Enter the Competition</a></li></ul></li><li><a href="/twisty-puzzles/">Puzzles</a><ul><li><a href="/twisty-puzzles/designers/">Designers</a><ul><li><a href="/twisty-puzzles/designers/uwe-meffert/">Uwe Meffert</a></li><li><a href="/twisty-puzzles/designers/tony-fisher/">Tony Fisher</a></li><li><a href="/twisty-puzzles/designers/oskar-van-deventer/">Oskar van Deventer</a></li></ul></li><li><a href="/twisty-puzzles/twisty-puzzle-modding/">Puzzle Modding</a></li><li><a href="/twisty-puzzles/siamese-twisty-puzzles/">Siamese Twisty Puzzles</a></li><li><a href="/twisty-puzzles/electronic-rubiks-cube-puzzles-touch-futuro-slide/">Electronic Cubes</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/">Shape Mods</a><ul><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/mirror-blocks-cube/">Mirror Blocks Cube</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/ghost-cube/">Ghost Cube</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/windmill-cube/">Windmill Cube</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/fisher-cube/">Fisher Cube</a></li></ul></li><li><a href="/twisty-puzzles/rubiks-cube-sticker-mods-and-picture-cubes-how-to-solve-orient-center-pieces-sudoku-shepherd-maze-pochmann/">Sticker Mods</a></li><li><a href="/twisty-puzzles/bandaged-cube-puzzles/">Bandaged Cubes</a></li><li><a href="/twisty-puzzles/void-cube/">Void Cube</a></li><li><a href="/twisty-puzzles/1x1x1-rubiks-cube/">1x1x1 Rubik\'s Cube</a></li><li><a href="/twisty-puzzles/2x2x2-rubiks-cube-pocket/">2x2x2 Rubik\'s Cube</a></li><li><a href="/twisty-puzzles/edges-void-cube/">Edges Only Void Cube</a></li><li><a href="/twisty-puzzles/2x2xn-cuboid-puzzles/">2x2xN Cuboid Puzzles</a></li><li><a href="/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/">4x4x4 Rubik\'s Cube</a><ul><li><a href="/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/parity/">4x4 Parity</a></li><li><a href="/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/4x4-cube-patterns/">4x4 Cube Patterns</a></li></ul></li><li><a href="/twisty-puzzles/5x5x5-rubiks-cube-professors-cube/">5x5x5 Rubik\'s Cube</a></li><li><a href="/twisty-puzzles/big-cubes-nxnxn-solution/">NxNxN Big Cubes</a></li><li><a href="/twisty-puzzles/cuboid/">Cuboid</a></li><li><a href="/twisty-puzzles/super-floppy-cube/">1x3x3 Floppy Cube</a></li><li><a href="/twisty-puzzles/2x3x3-domino-cube/">2x3x3 Domino Cube</a></li><li><a href="/twisty-puzzles/3x3x4-rubiks-cube/">3x3x4 Rubik\'s Cube</a></li><li><a href="/twisty-puzzles/5x3x3-and-7x3x3-rubiks-cube-cube4you-c4y/">5x3x3 and 7x3x3</a></li><li><a href="/twisty-puzzles/kilominx/">Kilominx</a></li><li><a href="/twisty-puzzles/megaminx-gigaminx-teraminx-petaminx/">Megaminx</a></li><li><a href="/twisty-puzzles/gear-cube-extreme-ultimate-how-to-solve-gearcube-solution/">Gear Cube</a></li><li><a href="/twisty-puzzles/gear-shift-puzzle/">Gear Shift Puzzle</a></li><li><a href="/twisty-puzzles/pyraminx-triangle-rubiks-cube/">Pyraminx</a><ul><li><a href="/twisty-puzzles/pyraminx-triangle-rubiks-cube/master-pyraminx/">Master Pyraminx</a></li></ul></li><li><a href="/twisty-puzzles/square-1-back-to-square-one/">Square-1</a></li><li><a href="/twisty-puzzles/redi-cube/">Redi Cube</a></li><li><a href="/twisty-puzzles/skewb-pyraminx-mod-skewb-diamond/">Skewb</a><ul><li><a href="/twisty-puzzles/skewb-pyraminx-mod-skewb-diamond/skewb-blindfolded-method/">Skewb blindfolded method</a></li></ul></li><li><a href="/twisty-puzzles/dino-cube/">Dino Cube</a></li><li><a href="/twisty-puzzles/helicopter-cube/">Helicopter Cube</a></li><li><a href="/twisty-puzzles/curvy-copter/">Curvy Copter</a></li><li><a href="/twisty-puzzles/dayan-gem-3-jumble-solution/">DaYan Gem</a></li><li><a href="/twisty-puzzles/starminx-solution-dodecahedron-shaped/">Starminx</a></li><li><a href="/twisty-puzzles/ivy-cube/">Ivy Cube</a></li><li><a href="/twisty-puzzles/hungarian-rings-sliding-puzzle/">Hungarian Rings</a></li><li><a href="/twisty-puzzles/rubiks-clock-mechanical-puzzle-solution-machanism/">Rubik\'s Clock</a></li><li><a href="/twisty-puzzles/rubiks-ufo-solution/">Rubik\'s UFO Solution</a></li><li><a href="/twisty-puzzles/rubiks-cheese/">Rubiks Cheese</a></li><li><a href="/twisty-puzzles/rubiks-magic-master-magic/">Rubik\'s Magic</a></li><li><a href="/twisty-puzzles/rubiks-snake-twist/">Rubik\'s Snake</a></li><li><a href="/twisty-puzzles/sliding-15-puzzle/">Sliding 15-Puzzle</a></li><li><a href="/twisty-puzzles/smart-egg/">Smart Egg</a></li><li><a href="/twisty-puzzles/non-twisty-puzzles-snake-cube-hanayama-babylon-tower-brain-racker/">Non-Twisty Puzzles</a></li><li><a href="/twisty-puzzles/jigsaw-puzzles/">Jigsaw Puzzles</a></li><li><a href="/twisty-puzzles/crossword-puzzles/">Crossword Puzzles</a></li><li><a href="/twisty-puzzles/neo-cubes-magnetic-balls-puzzle/">Neo Cubes</a></li></ul></li><li class="hidden"><a href="/puzzle-scramble-generators/">Puzzle Scramblers</a><ul><li><a href="/puzzle-scramble-generators/rubiks-cube-scrambler/">Rubik\'s Cube Scrambler</a></li><li><a href="/puzzle-scramble-generators/nxnxn-rubiks-cube-scrambler/">NxNxN Rubik\'s Cube Scrambler</a></li><li><a href="/puzzle-scramble-generators/square-1-scrambler/">Square-1 Scrambler</a></li><li><a href="/puzzle-scramble-generators/rubiks-clock-scrambler/">Rubik\'s Clock Scrambler</a></li><li><a href="/puzzle-scramble-generators/megaminx-scrambler/">Megaminx Scrambler</a></li><li><a href="/puzzle-scramble-generators/pyraminx-scrambler/">Pyraminx Scrambler</a></li><li><a href="/puzzle-scramble-generators/skewb-scrambler/">Skewb Scrambler</a></li></ul></li><li class="hidden"><a href="/rubiks-cube-widgets/">Rubik\'s Cube Widgets</a></li><li class="hidden"><a href="/amazing-rubiks-cube-facts/">Amazing Rubik\'s Cube Facts</a><ul><li><a href="/amazing-rubiks-cube-facts/21-30/">Amazing Rubik\'s Cube facts: 21 - 30</a></li></ul></li></ul></div><div class="mobileHidden"><h3><a href="/blog/">Latest News</a></h3><ul><li><a href="/blog/yiheng-wang-4_48-rubiks-cube-average-record/">Yiheng Wang: 4.48 Rubik\'s Cube Average&nbsp;Record</a></li><li><a href="/blog/max-park-rubik-single-record-313/">New World Record Single by Max Park</a></li><li><a href="/blog/yiheng-wang-record-4-69/">New World Record Average Yiheng Wang</a></li><li><a href="/blog/santa-claus-rubiks-cube/">Santa Claus Shaped Cube</a></li><li><a href="/blog/tymon-kolasinski-509-rubiks-cube-average-record/">New 3x3 Average World Record</a></li><li><a href="/blog/nxnxn-cube-simulator-solver/">NxNxN cube simulator &amp; solver</a></li><li><a href="/blog/trump-cube/">Donald Trump Rubik\'s Cube - 3D print timelapse</a></li><li><a href="/blog/spongebob-rubiks-cube-3d-pen-drawing/">Rubik\'s Cube SpongeBob: 3D&nbsp;drawing</a></li><li><a href="/blog/yusheng-du-record-347/">New world record: Yusheng Du -&nbsp;3.47&nbsp;s</a></li><li><a href="/blog/25-amazing-rubiks-cube-facts/">25 amazing Rubik\'s Cube&nbsp;facts</a></li><li>&nbsp;</li><li><a href="/blog/">MORE...</a></li></ul></div></div>');
        
    $("#tabsContent").html('<div class="menu-container"><div class="menuWidget"><nav><div id="stick-here"></div><div id="stickThis" class="menu"><p><a class="menu-mobile" href="#">Navigation</a></p><ul><li><a href="/">Home</a></li><li class="menu-dropdown-icon"><a href="/rubiks-cube-programs/">Programs</a><ul style="display: none;"><li><ul class="mymegamenu"><li><a class="mymegamenuaa" href="/online-rubiks-cube-solver-program/">Rubik\'s Solver</a></li><li><a class="mymegamenuaf" href="/online-puzzle-simulators/">Simulators</a></li></ul></li><li><ul class="mymegamenu"><li><a class="mymegamenuab" href="/online-rubiks-stopwatch-timer/">Online Timer</a></li><li><a class="mymegamenuac" href="/puzzle-scramble-generator/">Scrambler</a></li></ul></li><li><ul class="mymegamenu"><li><a class="mymegamenuae" href="/widget/3d/">3D Widget</a></li><li><a class="mymegamenuad" href="/rubiks-cube-mosaic-generator/">Mosaic Gen.</a></li></ul></li></ul></li><li class="menu-dropdown-icon"><a href="/the-rubiks-cube/">Rubik\'s Cube</a><ul><li><h4>To Learn</h4><ul><li><a href="/the-rubiks-cube/cubing-terminology-abbreviations-commonly-used-expressions/">Terminology</a></li><li><a href="/the-rubiks-cube/faq/">FAQ</a></li><li><a href="/the-rubiks-cube/notation/">Notation</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/">Beginner\'s method</a></li><li><a href="/the-rubiks-cube/advanced-cfop-fridrich/">Advanced method</a></li><li><a href="/the-rubiks-cube/fmc-fewest-move-count-challenge-method-tips/">Fewest Move</a></li><li><a href="/the-rubiks-cube/one-handed/">One-Handed</a></li><li><a href="/the-rubiks-cube/feet/">With Feet</a></li><li><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-blindfolded-tutorial/">Blindfolded</a></li><li><a href="/the-rubiks-cube/different-rubiks-cube-solving-methods/">Solving Methods</a></li><li><a href="/the-rubiks-cube/lubricate-rubiks-cube-with-silicone-or-vaseline-petroleum-jelly/">Lubrication</a></li><li><a href="/the-rubiks-cube/corner-cutting/">Corner Cutting</a></li><li><a href="/the-rubiks-cube/how-take-apart-disassemble-the-rubiks-cube-and-put-back-together/">Take It Apart</a></li></ul></li><li><h4>To Know</h4><ul><li><a href="/amazing-rubiks-cube-facts/">Amazing Facts</a></li><li><a href="/the-rubiks-cube/history-rubiks-cube/">History</a></li><li><a href="/the-rubiks-cube/the-inventor-rubik-erno-1974-budapest-hungary/">ErnÅ‘ Rubik - inventor</a></li><li><a href="/the-rubiks-cube/first-rubiks-cube-prototype-invention/">First prototype</a></li><li><a href="/the-rubiks-cube/rubiks-cube-patent-intellectual-property/">Patent</a></li><li><a href="/the-rubiks-cube/algorithm/">Algorithm</a></li><li><a href="/the-rubiks-cube/mathematics-of-the-rubiks-cube-permutation-group/">Mathematics</a></li><li><a href="/the-rubiks-cube/herbert-kociemba-optimal-cube-solver-cube-explorer/">Cube Explorer</a></li><li><a href="/the-rubiks-cube/gods-number/">God\'s Number</a></li><li><a href="/the-rubiks-cube/unsolvable-rubiks-cube-invalid-scramble/">Unsolvable Cube</a></li><li><a href="/the-rubiks-cube/japanese-western-color-schemes/">Color Schemes</a></li><li><a href="/the-rubiks-cube/the-best-speedcube-competition-cubes-moyu-dayan-shengshou-yuxin/">Cube Brands</a></li><li><a href="/the-rubiks-cube/puzzle-stores-webshops-around-the-world-where-to-buy-rubiks-cubes/">Where To Buy?</a></li></ul></li><li><h4>Culture</h4><ul><li><a href="/the-rubiks-cube/popular-culture/">Pop Culture</a></li><li><a href="/the-rubiks-cube/popular-culture/art/">Rubik\'s Art</a></li><li><a href="/the-rubiks-cube/popular-culture/in-movies/">Movies</a></li><li><a href="/the-rubiks-cube/popular-culture/rubiks-cube-music-videos/">Music Videos</a></li><li><a href="/the-rubiks-cube/popular-culture/commercials/">Commercials</a></li><li><a href="/the-rubiks-cube/popular-culture/buildings-architecture/">Architecture</a></li><li><a href="/the-rubiks-cube/popular-culture/statues/">Statues</a></li><li><a href="/the-rubiks-cube/beyond-rubiks-cube-exhibition/">Exhibition</a></li><li><a href="/the-rubiks-cube/museum/">Museum</a></li><li><a href="/the-rubiks-cube/lego-rubiks-cube-robots-rubot2/">Robots</a></li><li><a href="/the-rubiks-cube/popular-culture/rubikubism-pixel-art-mosaic/">Mosaics</a></li><li><a href="/the-rubiks-cube/rubiks-themed-gifts-souvenirs/">Gifts</a></li><li><a href="/the-rubiks-cube/magic-tricks/">Magic Tricks</a></li></ul></li><li><h4>For Cubers</h4><ul><li><a href="/the-rubiks-cube/speedcubing-speedsolving/">Speedcubing</a></li><li><a href="/the-rubiks-cube/speedcubers/">SpeedCubers</a></li><li><a href="/the-rubiks-cube/rubiks-cube-competitions-wca/">Competitions</a></li><li><a href="/the-rubiks-cube/rubik-speedsolving-association-rsa/">RSA</a></li><li><a href="/the-rubiks-cube/red-bull/">Red Bull</a></li><li><a href="/the-rubiks-cube/world-cube-association-wca/">WCA</a></li><li><a href="/the-rubiks-cube/wca-regulations/">WCA Regulations</a></li><li><a href="/the-rubiks-cube/guide-wca-solves/">WCA Solve Guide</a></li><li><a href="/the-rubiks-cube/rubiks-cube-competition-day-schedule-what-to-expect/">A Competition Day</a></li><li><a href="/the-rubiks-cube/history-of-the-world-record-evolution/">World Records</a></li><li><a href="/the-rubiks-cube/speedcube-stackmat-timer-stopwatch/">Stackmat</a></li><li><a href="/the-rubiks-cube/rubiks-cube-stickers-cubesmith/">Stickers</a></li><li><a href="/the-rubiks-cube/fingertricks/">Finger Tricks</a></li></ul></li><li><h4>For Fun</h4><ul><li><a href="/the-rubiks-cube/rubiks-cube-memes/">Funny Images</a></li><li><a href="/the-rubiks-cube/tricks/">Tricks</a></li><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/">Patterns</a></li><li><a href="/the-rubiks-cube/celebrities-actors-politicians-artists/">Celebrities</a></li><li><a href="/the-rubiks-cube/the-best-cubing-youtube-channels-speedcubing-vloggers-youtubers-video-bloggers/">YouTube Channels</a></li><li><a href="/the-rubiks-cube/you-can-do-the-cube/">You Can Do the Cube</a></li><li><a href="/the-rubiks-cube/my-rubiks-cube-collection-custom-twisty-puzzles/">Collections</a></li><li><a href="/the-rubiks-cube/rubiks-cube-quiz/">Puzzle Quiz</a></li><li><a href="/the-rubiks-cube/juggling/">Juggling</a></li><li><a href="/competition/">Competition</a></li><li><a href="/the-rubiks-cube/curriculum/">Curriculum</a></li></ul></li></ul></li><li class="menu-dropdown-icon"><a href="/twisty-puzzles/">Puzzles</a><ul><li><ul><li><a href="/the-rubiks-cube/rubiks-cube-patterns-algorithms/twisty-puzzle-patterns/">Patterns</a></li><li><a href="/twisty-puzzles/designers/">Designers</a></li><li><a href="/twisty-puzzles/twisty-puzzle-modding/">Puzzle Modding</a></li><li><a href="/twisty-puzzles/siamese-twisty-puzzles/">Siamese Puzzles</a></li></ul></li><li><h4>3x3x3</h4><ul><li><a href="/the-rubiks-cube/">Rubik\'s Cube</a></li><li><a href="/twisty-puzzles/electronic-rubiks-cube-puzzles-touch-futuro-slide/">Electronic Cube</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/">Shape Mods</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/mirror-blocks-cube/">- Mirror Blocks</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/fisher-cube/">- Fisher Cube</a></li><li><a href="/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/ghost-cube/">- Ghost Cube</a></li><li><a href="/twisty-puzzles/rubiks-cube-sticker-mods-and-picture-cubes-how-to-solve-orient-center-pieces-sudoku-shepherd-maze-pochmann/">Sticker Mods</a></li><li><a href="/twisty-puzzles/bandaged-cube-puzzles/">Bandaged Cubes</a></li><li><a href="/twisty-puzzles/void-cube/">Void Cube</a></li><li><a href="/twisty-puzzles/gear-cube-extreme-ultimate-how-to-solve-gearcube-solution/">Gear Cube</a></li></ul></li><li><h4>Cubes</h4><ul><li><a href="/twisty-puzzles/2x2x2-rubiks-cube-pocket/">2x2x2</a></li><li><a href="/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/">4x4x4</a></li><li><a href="/twisty-puzzles/5x5x5-rubiks-cube-professors-cube/">5x5x5</a></li><li><a href="/twisty-puzzles/big-cubes-nxnxn-solution/">Big Cubes</a></li><li><a href="/twisty-puzzles/square-1-back-to-square-one/">Square-1</a></li><li><a href="/twisty-puzzles/skewb-pyraminx-mod-skewb-diamond/">Skewb</a></li><li><a href="/twisty-puzzles/redi-cube/">Redi Cube</a></li><li><a href="/twisty-puzzles/dino-cube/">Dino Cube</a></li><li><a href="/twisty-puzzles/gear-shift-puzzle/">Gear Shift</a></li><li><a href="/twisty-puzzles/helicopter-cube/">Helicopter Cube</a></li><li><a href="/twisty-puzzles/curvy-copter/">Curvy Copter</a></li><li><a href="/twisty-puzzles/ivy-cube/">Ivy Cube</a></li><li><a href="/twisty-puzzles/1x1x1-rubiks-cube/">1x1x1</a></li></ul></li><li><h4><a href="/twisty-puzzles/cuboid/">Cuboid</a></h4><ul><li><a href="/twisty-puzzles/super-floppy-cube/">1x3x3 Floppy Cube</a></li><li><a href="/twisty-puzzles/2x3x3-domino-cube/">2x3x3 Domino Cube</a></li><li><a href="/twisty-puzzles/3x3x4-rubiks-cube/">3x3x4</a></li><li><a href="/twisty-puzzles/5x3x3-and-7x3x3-rubiks-cube-cube4you-c4y/">5x3x3 and 7x3x3</a></li><li><a href="/twisty-puzzles/2x2xn-cuboid-puzzles/">2x2xN Towers</a></li></ul></li><li><h4>Other Puzzles</h4><ul><li><a href="/twisty-puzzles/kilominx/">Kilominx</a></li><li><a href="/twisty-puzzles/megaminx-gigaminx-teraminx-petaminx/">Megaminx</a></li><li><a href="/twisty-puzzles/pyraminx-triangle-rubiks-cube/">Pyraminx</a></li><li><a href="/twisty-puzzles/pyraminx-triangle-rubiks-cube/master-pyraminx/">Master Pyraminx</a></li><li><a href="/twisty-puzzles/rubiks-ufo-solution/">UFO</a></li><li><a href="/twisty-puzzles/rubiks-cheese/">Cheese</a></li><li><a href="/twisty-puzzles/dayan-gem-3-jumble-solution/">DaYan Gem</a></li><li><a href="/twisty-puzzles/starminx-solution-dodecahedron-shaped/">Starminx</a></li><li><strong><a href="/twisty-puzzles/non-twisty-puzzles-snake-cube-hanayama-babylon-tower-brain-racker/">Non-Twisty</a></strong></li><li><a href="/twisty-puzzles/hungarian-rings-sliding-puzzle/">Hungarian Rings</a></li><li><a href="/twisty-puzzles/rubiks-clock-mechanical-puzzle-solution-machanism/">Rubik\'s Clock</a></li><li><a href="/twisty-puzzles/rubiks-magic-master-magic/">Rubik\'s Magic</a></li><li><a href="/twisty-puzzles/rubiks-snake-twist/">Rubik\'s Snake</a></li><li><a href="/twisty-puzzles/jigsaw-puzzles/">Jigsaw Puzzle</a></li><li><a href="/twisty-puzzles/neo-cubes-magnetic-balls-puzzle/">NeoCube</a></li><li><a href="/twisty-puzzles/sliding-15-puzzle/">Sliding 15-Puzzle</a></li></ul></li></ul></li></ul></div></nav></div></div><div class="tabsRight"><ul><li class="txta"><a href="/online-puzzle-simulators/">Play</a></li><li class="txta"><a href="/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/">Learn</a></li><li class="txta"><a href="/online-rubiks-cube-solver-program/">Solve</a></li><li><a href="/blog/"><span class="sprite blog">Blog</span></a></li><li><a href="/shop/"><span class="sprite shop">Rubik\'s Cube shops</span></a></li><li><a href="https://www.facebook.com/online.rubiks.cube.solver" target="_blank"><span class="sprite fb">Facebook</span></a></li><li><a href="https://www.tiktok.com/@ruwix0" target="_blank"><span class="sprite tiktok">Facebook</span></a></li><li><a href="https://twitter.com/RuwixCube" target="_blank"><span class="sprite tw">Twitter</span></a></li></ul></div><div id="wrapTooltipSearch"><div id="abortTooltipSearch">&times;</div><input type="text" id="tooltipSearch" placeholder="Search..." /><div id="tooltipSearchSuggestions"></div></div>');
        
    $("#footerContent").html('<footer id="footer">&copy;&nbsp;Ruwix | All Rights Reserved. | <a href="/about-us/">About&nbsp;Ruwix</a> | Author:&nbsp;<a href="/denes-ferenc/">Denes&nbsp;Ferenc</a> | Template by <a href="https://html5-templates.com/" target="_blank" rel="nofollow">HTML5&nbsp;Templates</a><br><a href="/amp/">Mobile Website</a> | <a href="https://ruwix.es/" rel="nofollow">Spanish Site</a> | <a href="/contribute/">Contribute</a><br><a href="/terms-and-conditions-privacy-policy/">Privacy, Terms and Conditions</a> | <a href="/sitemap/">SiteMap</a> | <a href="/contact/">Contact</a><br>This website is using cookies to improve the user experience, to collect anonymous visitor analytics and to show personalised ads.<div id="socialLinx"><ul><li><a title="Ruwix on Facebook" href="https://www.facebook.com/online.rubiks.cube.solver" target="blank"><img src="/pics/socialicons/fb.svg" alt="facebook" width="30" height="30" /></a></li><li><a title="Ruwix on TikTok" href="https://www.tiktok.com/@ruwix0" target="blank">TikTok</a></li><li><a title="Ruwix on Twitter" href="https://twitter.com/RuwixCube" target="_blank" rel="noopener"><img src="/pics/socialicons/twitter.svg" alt="twitter" width="30" height="30" /></a></li><li><a title="Our Youtube Channel" href="https://www.youtube.com/user/modusbeke/videos" target="_blank" rel="noopener"><img src="/pics/socialicons/youtube.svg" alt="youtube" width="30" height="30" /></a></li><li><a title="Rubik\'s Blog" href="/blog/"><img src="/pics/socialicons/rss.svg" alt="wordpress" width="30" height="30" /></a></li><li><a title="Ruwix on Blogspot" href="https://ruwix.blogspot.com/" target="_blank" rel="noopener"><img src="/pics/socialicons/blogger.svg" alt="blogspot" width="30" height="30" /></a></li><li><a title="Twisty puzzle photos on Flickr" href="https://www.flickr.com/photos/ruwix" target="_blank" rel="noopener"><img src="/pics/socialicons/flickr.svg" alt="flickr" width="30" height="30" /></a></li><li><a title="Contact Us" href="/contact/"><img src="/pics/socialicons/mail.svg" alt="contact" width="30" height="30" /></a></li></ul><div class="clearboth"></div></div></footer>');
        
    $('#popupBox').html('<div id="popupBoxClose" title="Close">&times;</div><div id="popupBoxInner"><h2>Featured Articles:</h2><div id="popupBoxFeatured" class="clearfix"></div><div></div><div class="popupBoxBox"><h2 class="inline-block">Share this page:&nbsp;&nbsp;</h2><div class="inline-block"><ul class="socialShareLinks"><li><a class="facebook" href="https://www.facebook.com/sharer.php?u=currentpagelink" target="_blank" rel="nofollow"><img src="/pics/socialicons/fb.svg" alt="Facebook"></a></li><li><a class="twitter" href="https://twitter.com/intent/tweet?url=currentpagelink&text=Check%20this%20out:" target="_blank" rel="nofollow"><img src="/pics/socialicons/twitter.svg" alt="Twitter"></a></li></ul></div></div><div></div><div class="popupBoxBox"><h2 class="inline-block">Follow us:&nbsp;&nbsp;</h2> <a title="Ruwix on Facebook" target="blank" href="https://www.facebook.com/online.rubiks.cube.solver"><img width="30" height="30" alt="facebook" src="/pics/socialicons/fb.svg"/></a> <a title="Our Twitter" target="_blank" href="https://twitter.com/RuwixCube"><img width="30" height="30" alt="twitter" src="/pics/socialicons/twitter.svg" /></a><a title="Rubik\'s Cube Blog" href="/blog/"><img width="30" height="30" alt="rubik blog" src="/pics/socialicons/rss.svg" /></a></div></div>');
        
    $('#rightSidebarContent').html('<div class="widget-container"><div id="sidebarFeaturedArticles"></div></div><div class="widget-container"><h3 class="widget-title">Share this page!</h3><ul class="socialShareLinks"><li><a class="facebook" href="https://www.facebook.com/sharer.php?u=currentpagelink" target="_blank" rel="nofollow noopener"><img src="/pics/socialicons/fb.svg" alt="Facebook" /></a></li><li><a class="twitter" href="https://twitter.com/intent/tweet?url=currentpagelink&amp;text=Check%20this%2Bout:" target="_blank" rel="nofollow noopener"><img src="/pics/socialicons/twitter.svg" alt="Twitter" /></a></li><li><a class="reddit" href="https://reddit.com/submit?url=currentpagelink&amp;title=Check%2Bthis%2Bout" target="_blank" rel="nofollow noopener"><img src="/pics/socialicons/reddit.svg" alt="Reddit" /></a></li><li><a class="mail" href="mailto:@gmail.com?subject=Check%20out%20this%20website&amp;body=Thought%20you%20might%20like%20this:%20currentpagelink" target="_blank" rel="noopener"><img src="/pics/socialicons/mail.svg" alt="Email to a friend" /></a></li></ul></div>');
        
    /*
    // Cookie Compliancy BEGIN
    $('#myCookieConsent').html('<div id="cookieWindow"><svg class="mobilehide" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.002 512.002" xml:space="preserve"><g><path d="M501.791,236.285c-32.933-11.827-53.189-45.342-50.644-71.807c0-4.351-2.607-8.394-5.903-11.25 c-3.296-2.842-8.408-4.072-12.686-3.384c-50.186,7.363-96.14-29.352-100.693-80.962c-0.41-4.658-2.959-8.848-6.914-11.353 c-3.94-2.49-8.848-3.032-13.198-1.406C271.074,71.02,232.637,44.084,217.3,8.986c-2.871-6.563-9.99-10.181-17.007-8.628 C84.82,26.125,0.001,137.657,0.001,256.002c0,140.61,115.39,256,256,256s256-115.39,256-256 C511.584,247.068,511.522,239.771,501.791,236.285z M105.251,272.131c-8.284,0-15-6.716-15-15c0-8.286,6.716-15,15-15 s15,6.714,15,15C120.251,265.415,113.534,272.131,105.251,272.131z M166.001,391.002c-24.814,0-45-20.186-45-45 c0-24.814,20.186-45,45-45c24.814,0,45,20.186,45,45C211.001,370.816,190.816,391.002,166.001,391.002z M181.001,211.002 c-16.538,0-30-13.462-30-30c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30C211.001,197.54,197.539,211.002,181.001,211.002z  M301.001,421.002c-16.538,0-30-13.462-30-30c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30 C331.001,407.54,317.539,421.002,301.001,421.002z M316.001,301.002c-24.814,0-45-20.186-45-45c0-24.814,20.186-45,45-45 c24.814,0,45,20.186,45,45C361.001,280.816,340.816,301.002,316.001,301.002z M405.251,332.131c-8.284,0-15-6.716-15-15 c0-8.286,6.716-15,15-15s15,6.714,15,15C420.251,325.415,413.534,332.131,405.251,332.131z"/></g></svg><h4>We value your privacy</h4><p>Ruwix is using cookies that are necessary to run our website. <span class="mobilehide">Cookies are small files stored on your device that allow websites to remember their visitors. Third-party cookies allow us to collect anonymous visitor statistics with Google Analytics, to integrate Facebook comments and social media share buttons and to show tailored&nbsp;ads.</span></p><p class="mobilehide">By using our website you accept our Terms&nbsp;&amp;&nbsp;Conditions and Privacy&nbsp;Policy.</p> <div id="cookieLinks"><a id="disagreeCookies">Disagree</a><a href="/terms-and-conditions-privacy-policy/">More&nbsp;details</a><a id="cookieButton" class="acceptCookies">Agree</a></div><div id="closeCookieConsent" class="acceptCookies" title="Allow cookies">&times;</div></div>');
        
    $("#disagreeCookies").click(function(){
        $("#cookieWindow p").first().html("Cookies can be deleted and completely disabled in your browser settings. There are dedicated browser extensions that let you monitor and manage your&nbsp;preferences. <br />Please read your browser's documentation to learn&nbsp;more.<br />Please contact us if you have any questions.");
    });	
    $(".acceptCookies").click(function(){
            var expire=new Date();
            expire=new Date(expire.getTime()+7776000000);
            document.cookie="cookieCompliancyAccepted=here; expires="+expire+";path=/";
            $("#myCookieConsent").fadeOut(300);
        });
        
        testFirstCookie();
        // Cookie Compliancy END
        */
        
        if(document.querySelector("link[hreflang=es]")) {	// spanish canonical <link rel="alternate" hreflang="es" href="https://ruwix.es/" />
            $(".tabsRight ul").append('<li><a class="langSwitch" title="Cambiar a espaÃ±ol" href="' + document.querySelector("link[hreflang=es]").getAttribute("href") + '"><img src="/img/lang-switch-esp.png" alt="Spanish" /></a></li>');
            
        }
        
    });
    
    
    // Avoid `console` errors in browsers that lack a console.
    (function() {
        var method;
        var noop = function () {};
        var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
        ];
        var length = methods.length;
        var console = (window.console = window.console || {});
    
        while (length--) {
            method = methods[length];
    
            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }
    }());
    
    var ttLinks = [0, 1];
    var ttAnchors = [0, 1];
    $(document).ready(function(){
        
        $(".tutorialLanguageSelector").html('<span>English <strong>&#9660;</strong></span><div id="tutorialLangDropdown"></div>');
        $(".tutorialLanguageSelector span").click(function() {
            $("#tutorialLangDropdown").html('<a target="_blank" rel="external nofollow" href="https://cubesolve.com/como-resolver-un-cubo-rubik-es/" title="Como resolver un cubo de Rubik">EspaÃ±ol</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/como-resolver-o-cubo-magico-pt/" title="Como resolver o Cubo M&aacute;gico">PortuguÃªs</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/comment-resoudre-le-cube-rubik-fr/" title="Comment r&eacute;soudre le cube Rubik">FranÃ§ais</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/wie-man-einen-zauberwurfel-rubiks-cube-lost-de/" title="Wie man einen Zauberw&uuml;rfel l&ouml;st">Deutsch</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/come-risolvere-un-cubo-di-rubik/" title="Come risolvere un cubo di Rubik">Italiano</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/rubik-kocka-kirakasa-hu/" title="A Rubik-kocka kirak&aacute;sa">Magyar</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/jak-ulozyc-kostke-rubika/" title="Jak uÅ‚oÅ¼yÄ‡ KostkÄ™ Rubika">Polski</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/hoe-los-je-een-rubiks-kubus-op-nl/" title="Hoe los je een Rubik\'s Kubus op">Nederlands</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/rezolvarea-cubului-rubik/" title="Rezolvarea cubului Rubik">RomÃ¢n</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/hur-man-loser-en-rubiks-kub-swe/" title="Hur man l&ouml;ser en Rubik\'s Kub">Svenska</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%AD%D9%84-%D9%85%D9%83%D8%B9%D8%A8-%D8%B1%D9%88%D8%A8%D9%8A%D9%83/" title="Ø·Ø±ÙŠÙ‚Ø© Ø­Ù„ Ù…ÙƒØ¹Ø¨ Ø±ÙˆØ¨ÙŠÙƒ">Ø¯Ø²ÙŠØ±ÙŠ</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/%D0%BA%D0%B0%D0%BA-%D1%81%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D1%8C-%D0%BA%D1%83%D0%B1%D0%B8%D0%BA-%D1%80%D1%83%D0%B1%D0%B8%D0%BA%D0%B0/" title="ÐšÐ°Ðº ÑÐ¾Ð±Ñ€Ð°Ñ‚ÑŒ ÐšÑƒÐ±Ð¸Ðº Ð ÑƒÐ±Ð¸ÐºÐ°">Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/%E0%A4%B0%E0%A5%82%E0%A4%AC%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%B8-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%AC-%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87-%E0%A4%B9%E0%A4%B2-%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%82/" title="à¤°à¥‚à¤¬à¤¿à¤•à¥à¤¸ à¤•à¥à¤¯à¥‚à¤¬ à¤•à¥ˆà¤¸à¥‡ à¤¹à¤² à¤•à¤°à¥‡à¤‚">à¤¹à¤¿à¤¨à¥à¤¦à¥€ </a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/c%C3%A1ch-gi%E1%BA%A3i-m%C3%A3-kh%E1%BB%91i-rubik/" title="C&aacute;ch giáº£i m&atilde; khá»‘i Rubik">Tiáº¿ng viá»‡t</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%E9%AD%94%E6%96%B9/" title="å¦‚ä½•è§£å†³é­”æ–¹">ä¸­æ–‡</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/%ED%81%90%EB%B8%8C%EB%A5%BC-%EB%A7%9E%EC%B6%94%EB%8A%94-%EB%B0%A9/" title="íë¸Œ ë§žì¶”ëŠ” ë°©ë²•">í•œêµ­ì–´</a><a target="_blank" rel="external nofollow" href="https://cubesolve.com/%E3%83%AB%E3%83%BC%E3%83%93%E3%83%83%E3%82%AF%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%96%E3%82%92%E5%AF%BE%E5%87%A6%E6%96%B9%E6%B3%95/" title="ãƒ«ãƒ¼ãƒ“ãƒƒã‚¯ã‚­ãƒ¥ãƒ¼ãƒ–ã‚’å¯¾å‡¦æ–¹æ³•">æ—¥æœ¬èªž</a>');
            $(".tutorialLanguageSelector div").toggle(222);
        });
        
        /*Search BEGIN*/
        i = 0;
        $(".navigation a").each(function() {	// ezeket a linkeket teszi a search tooltipbe
            ttLinks[i] = $(this).attr("href");
            ttAnchors[i] = $(this).text();
            i++;
            //console.log(ttLinks[i]);
            //console.log(ttAnchors[i]);
        });
        $("#abortTooltipSearch").click(function() {
            $("#tooltipSearch").val("");
            updateTooltipSearch();
        });
        $(".fullScreenTogglerButton").click(function() {
            $('body').toggleClass('fullScreenActv');
        });
        $("#tooltipSearch").keyup(function() {
            updateTooltipSearch();
        });
        $("#tooltipSearch").change(function() {
            updateTooltipSearch();
        });
         setTimeout(function ()	{
             //$("#tooltipSearch").focus();
         }, 300);
        
        /*Search END*/
    
        var parentTitle = $('#parentTitle').text();
        var parentLink = '/';
        if($('#parentTitle').length){
            parentLink = $('#parentTitle').attr('href');
        }
        
        var relativeLink = $('#relativeLink').text();
        
        if (parentLink.length > 2) {
            $(".sideBarWikiMenu ul ul li a").each(function() {
                if ($(this).attr('href') == relativeLink) {
                    $(this).parent().addClass('current_page_item');
                }
                
                
                if ($(this).attr('href').includes(parentLink)) {
                } else {
                    $(this).parent().addClass('hidden');
                }
            });
        } else {
            $('.sideBarWikiMenu').addClass('rootPageMenu');
            $('#parentTitle').hide(0);
        }
        
        $(".contentsPanel").each(function() {                
            $(this).prepend('<div class="hidePanel">[hide]</div><div class="showPanel">[show]</div>');
        });
    
        $("#mobileMenuTrigger").click(function(){
            $('.navigation').toggle(200);
        });
        
        
        $(".hidePanel").click(function(){
            $( this ).siblings('ul').hide( 150, function() { 
                $(this).parent().addClass('minimizedPanel');
            });
        });
        $(".showPanel").click(function(){
            $( this ).siblings('ul').show( 150, function() { 
                $(this).parent().removeClass('minimizedPanel');
            });
        });
        
         setTimeout(function ()	{
             $('#preventMouseHoverOnPageLoad').hide();
    
         }, 2000);
         
        setTimeout(function ()	{
            if ($(".roofpig")[0]){										// ha letezik .roofpig div akkor betolti a library-t
            
        //Wordpress ujrair sok specialis karaktert, ezert ezt kell betenni a functions.php fileba:
        //remove_filter( 'the_title', 'wptexturize' );
        //remove_filter( 'the_content', 'wptexturize' );
        //remove_filter( 'the_excerpt', 'wptexturize' );
        //remove_filter( 'comment_text', 'wptexturize' );
        
                var head = document.getElementsByTagName('head')[0];
                var js = document.createElement("script");
                js.type = "text/javascript";
                js.src = "/roofpig-3d/roofpig_and_three.min.js";
                head.appendChild(js);
            }
        }, 100);
    });
    
    function updateTooltipSearch() {
        var squery = $("#tooltipSearch").val().toLowerCase();	
        var tooltips = '';
        var results = 0;
        if (squery.length > 1) {
            for (i = 0; i < ttLinks.length; i++) {
                if ( (ttAnchors[i].toLowerCase().includes(squery)) || (ttLinks[i].toLowerCase().includes(squery))) {
                    tooltips += '<a href="' + ttLinks[i] + '">' + ttAnchors[i] +'</a>';
                    results ++;
                }
            }
            if (results == 0) {
                tooltips = "<em><strong>No results</strong><br />Try something else.</em>";
            }
            $("#tooltipSearchSuggestions, #abortTooltipSearch").fadeIn(222);
        } else {
            if (squery.length == 0) {
                $("#tooltipSearchSuggestions, #abortTooltipSearch").fadeOut(222);
            } else {
                tooltips = "<em>Enter 2 characters</em>";
                $("#tooltipSearchSuggestions, #abortTooltipSearch").fadeIn(222);
            }
        }
        $("#tooltipSearchSuggestions").html(tooltips);
    }
    
    jQuery(document).ready(function(){	
        setTimeout(function () {
            jQuery("#cookieConsent").fadeIn(200);
         }, 15000);
        jQuery("#closeCookieConsent").click(function() {
            jQuery("#cookieConsent").fadeOut(200);
        });	
    });	
    
    
    var alg;
    var tomb;
    var stri;
    var classz;
    var i=0;
    $( document ).ready(function() {
        $('.socialShareLinks a').each(function() {
          var value = $(this).attr('href');
          $(this).attr('href', value.replace('currentpagelink',$(location).attr('href')));
        });
        
        renderAlgArrows();
    
    });
    
    function renderAlgArrows() {
        //<span class="rots"></span>
        $("span.rots").each(function() {
            alg = $(this).text() + "";
            tomb = alg.split(" ");
            stri = "";
            for (var i = 0; i < tomb.length; i++) {
                classz = tomb[i].charAt(0);
                if (tomb[i].charAt(1) == 2) {	classz = classz + "2";	}
                if ((tomb[i].charAt(1) != 2) && (tomb[i].length == 2)) {	classz = classz + 'i';	}
                
                classz = classz.toLowerCase();
                stri = stri + "<span class=" + classz + ">" + tomb[i] + "</span>";
            }
            $(this).html(stri);
        });
    }
    
    $(document).ready(function(){
        $( "a.scrollLink, a.scrolllink, .contentsPanel a" ).click(function( event ) {
    //		console.log($(this).attr("href"));
            event.preventDefault();
            $("html, body").animate({ scrollTop: ($($(this).attr("href")).offset().top - 40) }, 500);
        });	
        
        $(".sendThisToSidebar").each(function() {                // send to sidebar
            $(this).appendTo('#topOfSidebar');
        });
        
        $(".sendThisToNavBar").each(function() {                // send to navbar
            $(this).appendTo('#topOfNavBar');
        });
        
        //$(".wrapBackToTop").insertBefore('.fb-comments');
        
        
        setTimeout(function () {
            $(".sendThisToNavBar a").each(function() {
                if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
                    $(this).parent().addClass('current_page_item');
                }
            });
            $(".menu-dropdown-icon ul a").each(function() {
                if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
                    if ($(this).attr('href') != "/") {
                        $(this).parent().addClass('activeMunuItem');
                    }
                }
            });
         }, 1000);
    
    
    });
    
    
    var globalScrollPos = 0;
    function sticktoBottomSidebar() {
    
        var h = window.innerHeight;
        var window_top = $(window).scrollTop();
        if (globalScrollPos > window_top) {	// scroll up
            $('#primary').removeClass('sticked');
        }
        globalScrollPos = window_top;
        var topp = $('#theBottomOfSidebar').offset().top;
        var panelh = $("#sidebar").height();
        //console.log(h, window_top, topp, panelh);
        
        if (window_top + h > topp + 22) {
            $('#primary').width($('#primary').width());
            $('#primary').addClass('sticked');
            $('#sidebar').height($('#primary').outerHeight());
        } else {
            //console.log('Leszed');
            $('#primary').removeClass('sticked');
        }
        
    }
    $(function() {
        setTimeout(function () {
            var myElem = document.getElementById('theBottomOfSidebar');
            if (myElem === null) {
                console.log('No sidebar');
            } else {	
                $(window).scroll(sticktoBottomSidebar);
                sticktoBottomSidebar();
            }	
        }, 3000);
    });
    
    /*
    function sticktothetop() {
        var window_top = $(window).scrollTop();
        if ($('#stick-here').length > 0) {
            var top = $('#stick-here').offset().top;
            if (window_top > top) {
                $('#stickThis').addClass('stick');
                $('#stick-here').height($('#stickThis').outerHeight());
            } else {
                $('#stickThis').removeClass('stick');
                $('#stick-here').height(0);
            }
        }
    }
    $(function() {
        $(window).scroll(sticktothetop);
        sticktothetop();
    });
    */
    
    function sticktothetops() {
        var window_top = $(window).scrollTop();
        if ($('#stick-here2').length > 0) {
            var top = $('#stick-here2').offset().top;
            if (window_top > top) {
                $('#stickThis2').addClass('stick');
                $('#stick-here2').height($('#stickThis2').outerHeight());
            } else {
                $('#stickThis2').removeClass('stick');
                $('#stick-here2').height(0);
            }
        }
    }
    $(function() {
        $(window).scroll(sticktothetops);
        sticktothetops();
    });
    
    
    //Featured random articles - BEGIN
    
    var fimage = ['solver','simulator','patterns','scrambler','edgeonly','cheese','robots','1x1x1','ivy','youcandothecube','mirror','facebook','webshops','simulator','advanced','tattoos','memes','2x2solver','oskar','fmc','solution','simulator','godsnumber','statues','cubetimer','solver','domino','twistypuzzles','celebrities','fishercube','rubikubism','advanced','4x4x4','solver','ghost','tonyfisher','popculture','facebook','patterns','wca','simulator','matsvalkrecord','square1simulator','gearcube','solution','advanced','webshops','memes','largestcube20','geekprank','architecutre','speedcubers','gifts','streetart','2x2x2','timeline','solver','cubetimer','inventor','advanced','history','voidcube','shapemods','5x5x5','art','simulator','solution','movies','originalrubiks','brands','takeapart','megaminx','skewb','videoclips','pyraminxsimulator','tricks','memes','cubetimer','solver','electronic','smartegg','patterns','notation','neocubes','unsolvable','solution','advanced','rubikscslocksimulator','funnyimages','jigsawpuzzles','facebook','mosaics','stickermods','square1','lubrication','solver','stickers','twistypatterns','tonyslargest','pyraminx','quiz','memes','geekprank','scrambler','youtube','simulator','advanced','cubetimer','solution','rubiksclock','snake','terminology','solver','puzzlemodding','15puzzle','hungarianrings','speedcubing','curriculum','siamese','kilominx','floppy','ufo','memes','nontwisty','solution','stackmat','solver','mathematics','commercials','cubetimer','bld','advanced','prototype','bandagedcube','facebook','geekprank','megaminxsimulator','patternspuzzles','simulator','solver','tshirts'];
    var flink = ['/online-rubiks-cube-solver-program/','/online-puzzle-simulators/','/the-rubiks-cube/rubiks-cube-patterns-algorithms/','/puzzle-scramble-generator/','/twisty-puzzles/edges-void-cube/','/twisty-puzzles/rubiks-cheese/','/the-rubiks-cube/lego-rubiks-cube-robots-rubot2/','/twisty-puzzles/1x1x1-rubiks-cube/','/twisty-puzzles/ivy-cube/','/the-rubiks-cube/you-can-do-the-cube/','/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/mirror-blocks-cube/','https://www.facebook.com/online.rubiks.cube.solver','/shop/','/online-puzzle-simulators/','/the-rubiks-cube/advanced-cfop-fridrich/','/the-rubiks-cube/popular-culture/art/','/the-rubiks-cube/rubiks-cube-memes/','/online-puzzle-simulators/2x2x2-pocket-cube-simulator.php','/twisty-puzzles/designers/oskar-van-deventer/','/the-rubiks-cube/fmc-fewest-move-count-challenge-method-tips/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/online-puzzle-simulators/','/the-rubiks-cube/gods-number/','/the-rubiks-cube/popular-culture/statues/','/online-rubiks-stopwatch-timer/','/online-rubiks-cube-solver-program/','/twisty-puzzles/2x3x3-domino-cube/','/twisty-puzzles/','/the-rubiks-cube/celebrities-actors-politicians-artists/','/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/fisher-cube/','/the-rubiks-cube/popular-culture/rubikubism-pixel-art-mosaic/','/the-rubiks-cube/advanced-cfop-fridrich/','/twisty-puzzles/4x4x4-rubiks-cube-rubiks-revenge/','/online-rubiks-cube-solver-program/','/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/ghost-cube/','/twisty-puzzles/designers/tony-fisher/','/the-rubiks-cube/popular-culture/','https://www.facebook.com/online.rubiks.cube.solver','/the-rubiks-cube/notation/','/the-rubiks-cube/world-cube-association-wca/','/online-puzzle-simulators/','/blog/yusheng-du-record-347/','/online-puzzle-simulators/square-1-simulator.php','/twisty-puzzles/gear-cube-extreme-ultimate-how-to-solve-gearcube-solution/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/the-rubiks-cube/advanced-cfop-fridrich/','/the-rubiks-cube/puzzle-stores-webshops-around-the-world-where-to-buy-rubiks-cubes/','/the-rubiks-cube/rubiks-cube-memes/','/the-worlds-largest-cubic-nxnxn-rubiks-cube-puzzle-22x22x22/','https://pranx.com/','/the-rubiks-cube/popular-culture/buildings-architecture/','/the-rubiks-cube/best-most-influential-speedsolvers-of-all-time-hall-of-fame/','/the-rubiks-cube/rubiks-themed-gifts-souvenirs/','/the-rubiks-cube/popular-culture/art/','/twisty-puzzles/2x2x2-rubiks-cube-pocket/','/the-rubiks-cube/history-rubiks-cube/important-dates-timeline/','/online-rubiks-cube-solver-program/','/online-rubiks-stopwatch-timer/','/the-rubiks-cube/the-inventor-rubik-erno-1974-budapest-hungary/','/the-rubiks-cube/advanced-cfop-fridrich/','/the-rubiks-cube/history-rubiks-cube/','/twisty-puzzles/void-cube/','/twisty-puzzles/3x3x3-rubiks-cube-shape-mods-variations/','/twisty-puzzles/5x5x5-rubiks-cube-professors-cube/','/the-rubiks-cube/popular-culture/art/','/online-puzzle-simulators/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/the-rubiks-cube/popular-culture/in-movies/','/why-rubiks-brand-cube-disliked-hated/','/the-rubiks-cube/the-best-speedcube-competition-cubes-moyu-dayan-shengshou-yuxin/','/the-rubiks-cube/how-take-apart-disassemble-the-rubiks-cube-and-put-back-together/','/twisty-puzzles/megaminx-gigaminx-teraminx-petaminx/','/twisty-puzzles/skewb-pyraminx-mod-skewb-diamond/','/the-rubiks-cube/popular-culture/rubiks-cube-music-videos/','/online-puzzle-simulators/pyraminx-simulator.php','/the-rubiks-cube/tricks/','/the-rubiks-cube/rubiks-cube-memes/','/online-rubiks-stopwatch-timer/','/online-rubiks-cube-solver-program/','/twisty-puzzles/electronic-rubiks-cube-puzzles-touch-futuro-slide/','/twisty-puzzles/smart-egg/','/the-rubiks-cube/notation/','/the-rubiks-cube/notation/','/twisty-puzzles/neo-cubes-magnetic-balls-puzzle/','/the-rubiks-cube/unsolvable-rubiks-cube-invalid-scramble/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/the-rubiks-cube/advanced-cfop-fridrich/','/online-puzzle-simulators/rubiks-clock-simulator.php','/the-rubiks-cube/rubiks-cube-memes/','/twisty-puzzles/jigsaw-puzzles/','https://www.facebook.com/online.rubiks.cube.solver','/the-rubiks-cube/popular-culture/rubikubism-pixel-art-mosaic/','/twisty-puzzles/rubiks-cube-sticker-mods-and-picture-cubes-how-to-solve-orient-center-pieces-sudoku-shepherd-maze-pochmann/','/twisty-puzzles/square-1-back-to-square-one/','/the-rubiks-cube/lubricate-rubiks-cube-with-silicone-or-vaseline-petroleum-jelly/','/online-rubiks-cube-solver-program/','/the-rubiks-cube/rubiks-cube-stickers-cubesmith/','/the-rubiks-cube/rubiks-cube-patterns-algorithms/twisty-puzzle-patterns/','/tony-fisher-presents-the-worlds-largest-rubiks-cube/','/twisty-puzzles/pyraminx-triangle-rubiks-cube/','/the-rubiks-cube/rubiks-cube-quiz/','/the-rubiks-cube/rubiks-cube-memes/','https://pranx.com/','/puzzle-scramble-generator/','/the-rubiks-cube/the-best-cubing-youtube-channels-speedcubing-vloggers-youtubers-video-bloggers/','/online-puzzle-simulators/','/the-rubiks-cube/advanced-cfop-fridrich/','/online-rubiks-stopwatch-timer/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/twisty-puzzles/rubiks-clock-mechanical-puzzle-solution-machanism/','/twisty-puzzles/rubiks-snake-twist/','/the-rubiks-cube/cubing-terminology-abbreviations-commonly-used-expressions/','/online-rubiks-cube-solver-program/','/twisty-puzzles/twisty-puzzle-modding/','/online-puzzle-simulators/sliding-15-puzzle/','/online-puzzle-simulators/hungarian-rings/','/the-rubiks-cube/speedcubing-speedsolving/','/the-rubiks-cube/curriculum/','/twisty-puzzles/siamese-twisty-puzzles/','/twisty-puzzles/kilominx/','/twisty-puzzles/super-floppy-cube/','/twisty-puzzles/rubiks-ufo-solution/','/the-rubiks-cube/rubiks-cube-memes/','/twisty-puzzles/non-twisty-puzzles-snake-cube-hanayama-babylon-tower-brain-racker/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/','/the-rubiks-cube/speedcube-stackmat-timer-stopwatch/','/online-rubiks-cube-solver-program/','/the-rubiks-cube/mathematics-of-the-rubiks-cube-permutation-group/','/the-rubiks-cube/popular-culture/commercials/','/online-rubiks-stopwatch-timer/','/the-rubiks-cube/how-to-solve-the-rubiks-cube-blindfolded-tutorial/','/the-rubiks-cube/advanced-cfop-fridrich/','/the-rubiks-cube/first-rubiks-cube-prototype-invention/','/twisty-puzzles/bandaged-cube-puzzles/','https://www.facebook.com/online.rubiks.cube.solver','https://pranx.com/','/online-puzzle-simulators/megaminx-simulator.php','/the-rubiks-cube/rubiks-cube-patterns-algorithms/twisty-puzzle-patterns/','/online-puzzle-simulators/','/online-rubiks-cube-solver-program/','/the-rubiks-cube/popular-culture/art/'];
    var ftitle = ['Online Cube Solver','Online 3D Cube','Color Patterns','Puzzle Scrambler','Edges Only Cube','Rubik\'s Cheese','Rubik Robots','1x1x1 Cube','Ivy Cube','You Can Do The Cube','Mirror Cube','Like Ruwix','Buy Puzzles','Rubik Simulator','Advanced Method','Rubik Tattoos','Funny Images','2x2 Simulator','Oskar van Deventer','Fewest Moves Challenge','Beginner\'s Solution','Cube Simulator','God\'s Number','Statues','Cube Timer','Online Cube Solver','Domino Cube','Twisty Puzzles','Cubing Celebrities','Fisher Cube','Puzzle Mosaics','Advanced Method','4x4x4','Online Cube Solver','Ghost Cube','Tony Fisher','Pop Culture','Like Ruwix','Color Patterns','WCA','Rubik Simulator','World Record','Square-1 Simulator','Gear Cube','Beginner\'s Solution','Advanced Method','Cubing Webshops','Funny Images','22 x 22 x 22 Cube','Pranx.com','Architecutre','The Best SpeedCubers','Rubik\'s Gifts','Street Art','2x2x2','History Timeline','Online Solver','Cube Timer','About The Inventor','Advanced Method','Cubing History','Void Cube','Shape Mods','5x5x5','Cube Art','3D Rubik Simulator','Beginner\'s Solution','Movies','Not the Best Brand?','Best Brands','Take It Apart','Megaminx','The Skewb','Music Videos','Pyraminx Simulator','Tricks','Funny Images','Cube Timer','Online Solver','Electronic Cubes','Smart Eggs','Color Patterns','Notation','Neo Cubes','Unsolvable Cube','Beginner\'s Solution','Advanced Method','Clock Simulator','Funny Images','Jigsaw Puzzles','Like Ruwix','Mosaic Gallery','Sticker Mods','Square-1','Lubricate','Cube Solver','Puzzle Stickers','Puzzle Patterns','Largest Cube','Pyraminx','Rubik Quiz','Funny Images','Pranx.com','Puzzle Scrambler','YouTube Channels','3D Rubik Simulator','Advanced Method','Cube Timer','Beginner\'s Solution','Rubik\'s Clock','Rubik\'s Snake','Terminology','Rubik\'s Cube Solver','Puzzle Modding','15 Puzzle','Hungarian Rings','Speedcubing','Curriculum','Siamese Puzzles','Kilominx','Floppy Cube','Rubi\'s UFO','Funny Images','Non-Twisty Puzzles','Beginner\'s Solution','Stackmat Timers','Rubik\'s Cube Solver','Mathematics','Commercials','Cube Timer','Blindfolded Tutorial','Advanced Method','First Prototype','Bandaged Cubes','Like Ruwix','Pranx.com','Megaminx Simulator','Twisty Patterns','3D Rubik Simulator','Cube Solver','T-Shirts'];
    
    jQuery(document).ready(function () {
        generateFeaturedArticles('#relatedThumbsFoot',6);
        generateFeaturedArticles('#sidebarFeaturedArticles',4);
        generateFeaturedArticles('#sidebarFeaturedArticles2',4);	
        if ((ftitle.length != flink.length) || (fimage.length != flink.length)) {
            console.log('Thumbnail arrow lengths dont match',ftitle.length,flink.length,fimage.length);
        };
        
    //AdBlock Begin
        setTimeout(function () {
            var myElem = document.getElementById('welcomeToRuwixMiddle');
            if (myElem === null) {
                console.log('No AdFilter Verification');
            } else {
                if (document.getElementById('welcomeToRuwixMiddle').offsetHeight) {	// no adblock
                    $('#welcomeToRuwix').fadeOut(500);
                } else {
                    $('#welcomeToRuwixMiddle').fadeOut(0);
                    document.getElementById("welcomeToRuwixMiddle").innerHTML = '<iframe style="border: none;width: 100%;height: 270px;overflow: hidden;" src="https://ruwix.com/noindex/whitelist/" scrolling="no"></iframe>';
                    $('#welcomeToRuwixMiddle').fadeIn(800);
                }
            }
        }, 8000);
    //AdBlock END
        
    });
    
    function htmlForOneItem(meik) {
        var content = '<a class="featuredArticle" target="_blank" title="' + ftitle[meik] + '" href="' + flink[meik] + '"><img src="/pics/featured160/' + fimage[meik] + '.jpg" alt="' + ftitle[meik] + '" /><span><span>' + ftitle[meik] + '</span></span></a>';
        
        return content;
    }
    
    function generateFeaturedArticles(container, hanyat) {
        var rand = Math.floor((Math.random() * (fimage.length - hanyat)));
        
        var content = '<div id="featuredArticles">';
        for (var i = 0; i < hanyat; i++) {
            content = content + htmlForOneItem(rand + i);
        }
        content = content + '</div>';
        jQuery(container).append(content);
        
    }
    // Featured random articles - END
    
    // Exit monitor - BEGIN
    /*
    var mouseX = 0;
    var mouseY = 0;
    var popupCounter = 0;
    var eltelt5mp = 0;
    
    document.addEventListener("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    jQuery(document).mouseleave(function () {
        if (mouseY < 100) {
            if ((popupCounter < 1) && (eltelt5mp == 1)){
                jQuery('#popupBox').show();
                jQuery('#popupShadow').show();
                generateFeaturedArticles('#popupBoxFeatured', 5);
                
                popupCounter ++;
            }
        }
    });
    
    jQuery(document).ready(function () {
    
        setTimeout(function(){	eltelt5mp = 1;	}, 4000);	
    
        jQuery("#popupBoxClose, #popupShadow").click(function(event) {
            jQuery("#popupBox").hide();
            jQuery("#popupShadow").hide();
        });
    });
    */
    // Exit monitor - END 
    
    
    
    
    // MegaMenu Begin
    
    $(document).ready(function() {
    
      "use strict";
    
    
      $( ".fb-comments" ).wrap( "<div class='fbCommentsWrapper'></div>" );
      
      $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
      //Checks if li has sub (ul) and adds class for toggle icon - just an UI
    
      $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
      //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)
    
      $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");
    
      //Adds menu-mobile class (for mobile toggle menu) before the normal menu
      //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
      //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
      //Done this way so it can be used with wordpress without any trouble
    
      $(".menu > ul > li").hover(function(e) {
        if ($(window).width() > 943) {
          $(this).children("ul").stop(true, false).fadeToggle(150);
          e.preventDefault();
        }
      });
      //If width is more than 943px dropdowns are displayed on hover
    
      $(".menu > ul > li").click(function() {
        if ($(window).width() <= 943) {
          $(this).children("ul").fadeToggle(150);
        }
      });
      //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)
    
      $(".menu-mobile").click(function(e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
      });
      //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)
    
    });
    
    // 	MegaMenu END
    
    // 		Scroll to top when arrow up clicked BEGIN
    $w = $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    
    });
    $(document).ready(function() {
        $("#back2Top, .backToTopPage").click(function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    
    });
     //		Scroll to top when arrow up clicked END
    
    //		Pattern Gallery BEGIN
    var galleryIndex = 0;
    var galleryItems = 0;
    var patternName = new Array();
    var patternFile = new Array();
    var patternAlg = new Array();
    var patternDesc = new Array();
    function openPattern(meik) {
        if (meik > galleryItems) {	meik = 0;	}
        if (meik < 0) {	meik = galleryItems;	}
        $('#openedPatternContent').html('<h2><span>' + (Number(meik) + 1) + '.</span> ' + patternName[meik] + '</h2><div class="patterninfo">' + patternDesc[meik] + '</div><div><strong>' + patternAlg[meik] + '</strong></div><div><img class="thisPatternImg" src="/pics/rubiks-cube/patterns/' + patternFile[meik] + '.svg" alt="' + patternName[meik] + '" /><iframe src="https://ruwix.com/widget/3d/?alg=' + patternAlg[meik] + '&setupmoves=' + patternAlg[meik] + '&hover=7&speed=800&flags=showalg&colors=U:y%20F:b%20R:r%20B:g%20L:o%20D:w" scrolling="no"></iframe></div><div class="patternRotsWrap"><span class="rots">' + patternAlg[meik] + '</span></div><div class="inverseAlg">Inverse: <strong>' + calculateInverseAlg(patternAlg[meik]) + '</strong></div>');
        galleryIndex = meik;
        renderAlgArrows();
        $('#wrapOpenedPattern, #patternGalleryShadow').fadeIn(300);
    }
    function calculateInverseAlg(alg) {
        var inv = alg.split(" ");
        var inverse = "";
        for (var i = inv.length-1; i >= 0; i--) {
            if (inv[i] == "F")	{	inverse += "F' ";	}
            if (inv[i] == "R")	{	inverse += "R' ";	}
            if (inv[i] == "U")	{	inverse += "U' ";	}
            if (inv[i] == "B")	{	inverse += "B' ";	}
            if (inv[i] == "L")	{	inverse += "L' ";	}
            if (inv[i] == "D")	{	inverse += "D' ";	}
            if (inv[i] == "f")	{	inverse += "f' ";	}
            if (inv[i] == "r")	{	inverse += "r' ";	}
            if (inv[i] == "u")	{	inverse += "u' ";	}
            if (inv[i] == "b")	{	inverse += "b' ";	}
            if (inv[i] == "l")	{	inverse += "l' ";	}
            if (inv[i] == "d")	{	inverse += "d' ";	}
            if (inv[i] == "M")	{	inverse += "M' ";	}
            if (inv[i] == "E")	{	inverse += "E' ";	}
            if (inv[i] == "S")	{	inverse += "S' ";	}
            if (inv[i] == "x")	{	inverse += "x' ";	}
            if (inv[i] == "y")	{	inverse += "y' ";	}
            if (inv[i] == "z")	{	inverse += "z' ";	}
            
            if (inv[i] == "F'")	{	inverse += "F ";	}
            if (inv[i] == "R'")	{	inverse += "R ";	}
            if (inv[i] == "U'")	{	inverse += "U ";	}
            if (inv[i] == "B'")	{	inverse += "B ";	}
            if (inv[i] == "L'")	{	inverse += "L ";	}
            if (inv[i] == "D'")	{	inverse += "D ";	}
            if (inv[i] == "f'")	{	inverse += "f ";	}
            if (inv[i] == "r'")	{	inverse += "r ";	}
            if (inv[i] == "u'")	{	inverse += "u ";	}
            if (inv[i] == "b'")	{	inverse += "b ";	}
            if (inv[i] == "l'")	{	inverse += "l ";	}
            if (inv[i] == "d'")	{	inverse += "d ";	}
            if (inv[i] == "M'")	{	inverse += "M ";	}
            if (inv[i] == "E'")	{	inverse += "E ";	}
            if (inv[i] == "S'")	{	inverse += "S ";	}
            if (inv[i] == "x'")	{	inverse += "x ";	}
            if (inv[i] == "y'")	{	inverse += "y ";	}
            if (inv[i] == "z'")	{	inverse += "z ";	}
            
            if (inv[i] == "F2")	{	inverse += "F2 ";	}
            if (inv[i] == "R2")	{	inverse += "R2 ";	}
            if (inv[i] == "U2")	{	inverse += "U2 ";	}
            if (inv[i] == "B2")	{	inverse += "B2 ";	}
            if (inv[i] == "L2")	{	inverse += "L2 ";	}
            if (inv[i] == "D2")	{	inverse += "D2 ";	}
            if (inv[i] == "M2")	{	inverse += "M2 ";	}
            if (inv[i] == "E2")	{	inverse += "E2 ";	}
            if (inv[i] == "S2")	{	inverse += "S2 ";	}
            if (inv[i] == "x2")	{	inverse += "x2 ";	}
            if (inv[i] == "y2")	{	inverse += "y2 ";	}
            if (inv[i] == "z2")	{	inverse += "z2 ";	}
        }	
        return inverse;
    }
    
    $(document).ready(function(){
        $("#patternGallery > div").each(function() {
            patternName[galleryIndex] = $(this).text();
            patternFile[galleryIndex] = $(this).attr("data-img");
            patternAlg[galleryIndex] = $(this).attr("data-alg");
            patternDesc[galleryIndex] = $(this).attr("data-desc");
            $(this).attr("data-index",galleryIndex);
            $(this).html('<h3>' + patternName[galleryIndex] + '</h3><img src="/pics/rubiks-cube/patterns/' + patternFile[galleryIndex] + '.svg" alt="' + patternName[galleryIndex] + '" />');
            
            galleryItems = galleryIndex;
            galleryIndex++;
        });
    
        $("#patternGallery > div").click(function(){
            openPattern($(this).attr('data-index'));
        });	
        $("#patternSliderLeft").click(function(){
            openPattern(Number(galleryIndex) - 1);
        });	
        $("#patternSliderRight").click(function(){
            openPattern(Number(galleryIndex) + 1);
        });	
        $("#closeOpenedPattern, #patternGalleryShadow").click(function(){
            $("#patternGalleryShadow, #wrapOpenedPattern").fadeOut(300);
        });
    });
    //		Pattern Gallery END