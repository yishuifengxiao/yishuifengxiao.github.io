import siteConfig from "@generated/docusaurus.config";
export default function prismIncludeLanguages(PrismObject) {
  const {
    themeConfig: { prism },
  } = siteConfig;
  const { additionalLanguages } = prism;
  // Prism components work on the Prism instance on the window, while prism-
  // react-renderer uses its own Prism instance. We temporarily mount the
  // instance onto window, import components to enhance it, then remove it to
  // avoid polluting global namespace.
  // You can mutate PrismObject: registering plugins, deleting languages... As
  // long as you don't re-assign it
  globalThis.Prism = PrismObject;
  additionalLanguages.forEach((lang) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    require(`prismjs/components/prism-${lang}`);
  });
  require("./prism-abap");
  require("./prism-abnf");
  require("./prism-actionscript");
  require("./prism-ada");
  require("./prism-agda");
  require("./prism-al");
  require("./prism-antlr4");
  require("./prism-apacheconf");
  require("./prism-apex");
  require("./prism-apl");
  require("./prism-applescript");
  require("./prism-aql");
  require("./prism-arduino");
  require("./prism-arff");
  require("./prism-armasm");
  require("./prism-arturo");
  require("./prism-asm6502");
  require("./prism-asmatmel");
  require("./prism-aspnet");
  require("./prism-autohotkey");
  require("./prism-autoit");
  require("./prism-avisynth");
  require("./prism-avro-idl");
  require("./prism-awk");
  require("./prism-bash");
  require("./prism-basic");
  require("./prism-batch");
  require("./prism-bbcode");
  require("./prism-bbj");
  require("./prism-bicep");
  require("./prism-birb");
  require("./prism-bison");
  require("./prism-bnf");
  require("./prism-bqn");
  require("./prism-brainfuck");
  require("./prism-brightscript");
  require("./prism-bro");
  require("./prism-bsl");
  require("./prism-c");
  require("./prism-cfscript");
  require("./prism-chaiscript");
  require("./prism-cil");
  require("./prism-cilkc");
  require("./prism-cilkcpp");
  require("./prism-clike");
  require("./prism-clojure");
  require("./prism-cmake");
  require("./prism-cobol");
  require("./prism-coffeescript");
  require("./prism-concurnas");
  require("./prism-cooklang");
  require("./prism-coq");
  require("./prism-cpp");
  require("./prism-csharp");
  require("./prism-cshtml");
  require("./prism-csp");
  require("./prism-css-extras");
  require("./prism-css");
  require("./prism-csv");
  require("./prism-cue");
  require("./prism-cypher");
  require("./prism-d");
  require("./prism-dart");
  require("./prism-dataweave");
  require("./prism-dax");
  require("./prism-dhall");
  require("./prism-diff");
  require("./prism-django");
  require("./prism-dns-zone-file");
  require("./prism-dot");
  require("./prism-ebnf");
  require("./prism-editorconfig");
  require("./prism-eiffel");
  require("./prism-ejs");
  require("./prism-elixir");
  require("./prism-elm");
  require("./prism-erb");
  require("./prism-erlang");
  require("./prism-etlua");
  require("./prism-excel-formula");
  require("./prism-factor");
  require("./prism-false");
  require("./prism-firestore-security-rules");
  require("./prism-flow");
  require("./prism-fortran");
  require("./prism-fsharp");
  require("./prism-ftl");
  require("./prism-gap");
  require("./prism-gcode");
  require("./prism-gdscript");
  require("./prism-gedcom");
  require("./prism-gettext");
  require("./prism-gherkin");
  require("./prism-git");
  require("./prism-glsl");
  require("./prism-gml");
  require("./prism-gn");
  require("./prism-go-module");
  require("./prism-go");
  require("./prism-gradle");
  require("./prism-graphql");
  require("./prism-groovy");
  require("./prism-haml");
  require("./prism-handlebars");
  require("./prism-haskell");
  require("./prism-haxe");
  require("./prism-hcl");
  require("./prism-hlsl");
  require("./prism-hoon");
  require("./prism-hpkp");
  require("./prism-hsts");
  require("./prism-http");
  require("./prism-ichigojam");
  require("./prism-icon");
  require("./prism-icu-message-format");
  require("./prism-idris");
  require("./prism-iecst");
  require("./prism-ignore");
  require("./prism-include-languages");
  require("./prism-inform7");
  require("./prism-ini");
  require("./prism-io");
  require("./prism-j");
  require("./prism-java");
  require("./prism-javascript");
  require("./prism-javastacktrace");
  require("./prism-jexl");
  require("./prism-jolie");
  require("./prism-jq");
  require("./prism-js-extras");
  require("./prism-js-templates");
  require("./prism-json");
  require("./prism-json5");
  require("./prism-jsonp");
  require("./prism-jsstacktrace");
  require("./prism-jsx");
  require("./prism-julia");
  require("./prism-keepalived");
  require("./prism-keyman");
  require("./prism-kotlin");
  require("./prism-kumir");
  require("./prism-kusto");
  require("./prism-latex");
  require("./prism-latte");
  require("./prism-less");
  require("./prism-lilypond");
  require("./prism-linker-script");
  require("./prism-lisp");
  require("./prism-livescript");
  require("./prism-llvm");
  require("./prism-log");
  require("./prism-lolcode");
  require("./prism-lua");
  require("./prism-magma");
  require("./prism-makefile");
  require("./prism-markdown");
  require("./prism-markup-templating");
  require("./prism-markup");
  require("./prism-mata");
  require("./prism-matlab");
  require("./prism-maxscript");
  require("./prism-mel");
  require("./prism-mermaid");
  require("./prism-metafont");
  require("./prism-mizar");
  require("./prism-mongodb");
  require("./prism-monkey");
  require("./prism-moonscript");
  require("./prism-n1ql");
  require("./prism-n4js");
  require("./prism-nand2tetris-hdl");
  require("./prism-naniscript");
  require("./prism-nasm");
  require("./prism-neon");
  require("./prism-nevod");
  require("./prism-nginx");
  require("./prism-nim");
  require("./prism-nix");
  require("./prism-nsis");
  require("./prism-objectivec");
  require("./prism-ocaml");
  require("./prism-odin");
  require("./prism-opencl");
  require("./prism-openqasm");
  require("./prism-oz");
  require("./prism-parigp");
  require("./prism-parser");
  require("./prism-pascal");
  require("./prism-pascaligo");
  require("./prism-pcaxis");
  require("./prism-peoplecode");
  require("./prism-perl");
  require("./prism-php-extras");
  require("./prism-php");
  require("./prism-plant-uml");
  require("./prism-plsql");
  require("./prism-powerquery");
  require("./prism-powershell");
  require("./prism-processing");
  require("./prism-prolog");
  require("./prism-promql");
  require("./prism-properties");
  require("./prism-protobuf");
  require("./prism-psl");
  require("./prism-pug");
  require("./prism-puppet");
  require("./prism-pure");
  require("./prism-purebasic");
  require("./prism-purescript");
  require("./prism-python");
  require("./prism-q");
  require("./prism-qml");
  require("./prism-qore");
  require("./prism-qsharp");
  require("./prism-r");
  require("./prism-reason");
  require("./prism-regex");
  require("./prism-rego");
  require("./prism-renpy");
  require("./prism-rescript");
  require("./prism-rest");
  require("./prism-rip");
  require("./prism-roboconf");
  require("./prism-robotframework");
  require("./prism-ruby");
  require("./prism-rust");
  require("./prism-sas");
  require("./prism-sass");
  require("./prism-scala");
  require("./prism-scheme");
  require("./prism-scss");
  require("./prism-shell-session");
  require("./prism-smali");
  require("./prism-smalltalk");
  require("./prism-smarty");
  require("./prism-sml");
  require("./prism-solidity");
  require("./prism-solution-file");
  require("./prism-soy");
  require("./prism-splunk-spl");
  require("./prism-sqf");
  require("./prism-sql");
  require("./prism-squirrel");
  require("./prism-stan");
  require("./prism-stata");
  require("./prism-stylus");
  require("./prism-supercollider");
  require("./prism-swift");
  require("./prism-systemd");
  require("./prism-tap");
  require("./prism-tcl");
  require("./prism-textile");
  require("./prism-toml");
  require("./prism-tremor");
  require("./prism-tsx");
  require("./prism-tt2");
  require("./prism-turtle");
  require("./prism-typescript");
  require("./prism-typoscript");
  require("./prism-unrealscript");
  require("./prism-uorazor");
  require("./prism-uri");
  require("./prism-v");
  require("./prism-vala");
  require("./prism-vbnet");
  require("./prism-velocity");
  require("./prism-verilog");
  require("./prism-vhdl");
  require("./prism-vim");
  require("./prism-visual-basic");
  require("./prism-warpscript");
  require("./prism-wasm");
  require("./prism-web-idl");
  require("./prism-wgsl");
  require("./prism-wiki");
  require("./prism-wolfram");
  require("./prism-wren");
  require("./prism-xeora");
  require("./prism-xojo");
  require("./prism-xquery");
  require("./prism-yaml");
  require("./prism-yang");
  require("./prism-zig");
  
  delete globalThis.Prism;
}
