// Define custom colors for languages that are not in the GitHub colors list
const CUSTOM_COLORS = [
  { name: "React", color: "#4F5D95" },
  { name: "TypeScript", color: "#FF0000" },
  { name: "TailwindCSS", color: "#00FF00" },
  { name: "C", color: "#555555" },
  { name: "C#", color: "#178600" },
  { name: "C++", color: "#f34b7d" },
  { name: "Dockerfile", color: "#384d54" },
  { name: "GraphQL", color: "#e10098" },
  { name: "HTML", color: "#e34c26" },
  { name: "Java", color: "#b07219" },
  { name: "JavaScript", color: "#f1e05a" },
  { name: "CSS", color: "#563d7c" },
];

//https://github.com/ozh/github-colors/blob/master/colors.json
const GITHUB_COLORS = [
  { name: "1C Enterprise", color: "#814CCC" },
  {
    name: "2-Dimensional Array",
    color: "#38761D",
  },
  {
    name: "4D",
    color: "#004289",
  },
  {
    name: "ABAP",
    color: "#E8274B",
  },
  {
    name: "ABAP CDS",
    color: "#555e25",
  },
  {
    name: "ActionScript",
    color: "#882B0F",
  },
  {
    name: "Ada",
    color: "#02f88c",
  },
  {
    name: "Adblock Filter List",
    color: "#800000",
  },
  {
    name: "Adobe Font Metrics",
    color: "#fa0f00",
  },
  {
    name: "Agda",
    color: "#315665",
  },
  {
    name: "AGS Script",
    color: "#B9D9FF",
  },
  {
    name: "AIDL",
    color: "#34EB6B",
  },
  {
    name: "AL",
    color: "#3AA2B5",
  },
  {
    name: "Alloy",
    color: "#64C800",
  },
  {
    name: "Alpine Abuild",
    color: "#0D597F",
  },
  {
    name: "Altium Designer",
    color: "#A89663",
  },
  {
    name: "AMPL",
    color: "#E6EFBB",
  },
  {
    name: "AngelScript",
    color: "#C7D7DC",
  },
  {
    name: "Ant Build System",
    color: "#A9157E",
  },
  {
    name: "Antlers",
    color: "#ff269e",
  },
  {
    name: "ANTLR",
    color: "#9DC3FF",
  },
  {
    name: "ApacheConf",
    color: "#d12127",
  },
  {
    name: "Apex",
    color: "#1797c0",
  },
  {
    name: "API Blueprint",
    color: "#2ACCA8",
  },
  {
    name: "APL",
    color: "#5A8164",
  },
  {
    name: "Apollo Guidance Computer",
    color: "#0B3D91",
  },
  {
    name: "AppleScript",
    color: "#101F1F",
  },
  {
    name: "Arc",
    color: "#aa2afe",
  },
  {
    name: "AsciiDoc",
    color: "#73a0c5",
  },
  {
    name: "ASL",
    color: null,
  },
  {
    name: "ASP.NET",
    color: "#9400ff",
  },
  {
    name: "AspectJ",
    color: "#a957b0",
  },
  {
    name: "Assembly",
    color: "#6E4C13",
  },
  {
    name: "Astro",
    color: "#ff5a03",
  },
  {
    name: "Asymptote",
    color: "#ff0000",
  },
  {
    name: "ATS",
    color: "#1ac620",
  },
  {
    name: "Augeas",
    color: "#9CC134",
  },
  {
    name: "AutoHotkey",
    color: "#6594b9",
  },
  {
    name: "AutoIt",
    color: "#1C3552",
  },
  {
    name: "Avro IDL",
    color: "#0040FF",
  },
  {
    name: "Awk",
    color: "#c30e9b",
  },
  {
    name: "Ballerina",
    color: "#FF5000",
  },
  {
    name: "BASIC",
    color: "#ff0000",
  },
  {
    name: "Batchfile",
    color: "#C1F12E",
  },
  {
    name: "Beef",
    color: "#a52f4e",
  },
  {
    name: "Befunge",
    color: null,
  },
  {
    name: "Berry",
    color: "#15A13C",
  },
  {
    name: "BibTeX",
    color: "#778899",
  },
  {
    name: "Bicep",
    color: "#519aba",
  },
  {
    name: "Bikeshed",
    color: "#5562ac",
  },
  {
    name: "Bison",
    color: "#6A463F",
  },
  {
    name: "BitBake",
    color: "#00bce4",
  },
  {
    name: "Blade",
    color: "#f7523f",
  },
  {
    name: "BlitzBasic",
    color: "#00FFAE",
  },
  {
    name: "BlitzMax",
    color: "#cd6400",
  },
  {
    name: "Bluespec",
    color: "#12223c",
  },
  {
    name: "Bluespec BH",
    color: "#12223c",
  },
  {
    name: "Boo",
    color: "#d4bec1",
  },
  {
    name: "Boogie",
    color: "#c80fa0",
  },
  {
    name: "Brainfuck",
    color: "#2F2530",
  },
  {
    name: "BrighterScript",
    color: "#66AABB",
  },
  {
    name: "Brightscript",
    color: "#662D91",
  },
  {
    name: "Browserslist",
    color: "#ffd539",
  },
  {
    name: "C",
    color: "#555555",
  },
  {
    name: "C#",
    color: "#178600",
  },
  {
    name: "C++",
    color: "#f34b7d",
  },
  {
    name: "C2hs Haskell",
    color: null,
  },
  {
    name: "Cabal Config",
    color: "#483465",
  },
  {
    name: "Cadence",
    color: "#00ef8b",
  },
  {
    name: "Cairo",
    color: "#ff4a48",
  },
  {
    name: "CameLIGO",
    color: "#3be133",
  },
  {
    name: "CAP CDS",
    color: "#0092d1",
  },
  {
    name: "Cap'n Proto",
    color: "#c42727",
  },
  {
    name: "CartoCSS",
    color: null,
  },
  {
    name: "Ceylon",
    color: "#dfa535",
  },
  {
    name: "Chapel",
    color: "#8dc63f",
  },
  {
    name: "Charity",
    color: null,
  },
  {
    name: "ChucK",
    color: "#3f8000",
  },
  {
    name: "Circom",
    color: "#707575",
  },
  {
    name: "Cirru",
    color: "#ccccff",
  },
  {
    name: "Clarion",
    color: "#db901e",
  },
  {
    name: "Clarity",
    color: "#5546ff",
  },
  {
    name: "Classic ASP",
    color: "#6a40fd",
  },
  {
    name: "Clean",
    color: "#3F85AF",
  },
  {
    name: "Click",
    color: "#E4E6F3",
  },
  {
    name: "CLIPS",
    color: "#00A300",
  },
  {
    name: "Clojure",
    color: "#db5855",
  },
  {
    name: "Closure Templates",
    color: "#0d948f",
  },
  {
    name: "Cloud Firestore Security Rules",
    color: "#FFA000",
  },
  {
    name: "CMake",
    color: "#DA3434",
  },
  {
    name: "COBOL",
    color: null,
  },
  {
    name: "CodeQL",
    color: "#140f46",
  },
  {
    name: "CoffeeScript",
    color: "#244776",
  },
  {
    name: "ColdFusion",
    color: "#ed2cd6",
  },
  {
    name: "ColdFusion CFC",
    color: "#ed2cd6",
  },
  {
    name: "COLLADA",
    color: "#F1A42B",
  },
  {
    name: "Common Lisp",
    color: "#3fb68b",
  },
  {
    name: "Common Workflow Language",
    color: "#B5314C",
  },
  {
    name: "Component Pascal",
    color: "#B0CE4E",
  },
  {
    name: "Cool",
    color: null,
  },
  {
    name: "Coq",
    color: "#d0b68c",
  },
  {
    name: "Crystal",
    color: "#000100",
  },
  {
    name: "CSON",
    color: "#244776",
  },
  {
    name: "Csound",
    color: "#1a1a1a",
  },
  {
    name: "Csound Document",
    color: "#1a1a1a",
  },
  {
    name: "Csound Score",
    color: "#1a1a1a",
  },
  {
    name: "CSS",
    color: "#563d7c",
  },
  {
    name: "CSV",
    color: "#237346",
  },
  {
    name: "Cuda",
    color: "#3A4E3A",
  },
  {
    name: "CUE",
    color: "#5886E1",
  },
  {
    name: "Curry",
    color: "#531242",
  },
  {
    name: "CWeb",
    color: "#00007a",
  },
  {
    name: "Cycript",
    color: null,
  },
  {
    name: "Cypher",
    color: "#34c0eb",
  },
  {
    name: "Cython",
    color: "#fedf5b",
  },
  {
    name: "D",
    color: "#ba595e",
  },
  {
    name: "D2",
    color: "#526ee8",
  },
  {
    name: "Dafny",
    color: "#FFEC25",
  },
  {
    name: "Darcs Patch",
    color: "#8eff23",
  },
  {
    name: "Dart",
    color: "#00B4AB",
  },
  {
    name: "DataWeave",
    color: "#003a52",
  },
  {
    name: "Debian Package Control File",
    color: "#D70751",
  },
  {
    name: "DenizenScript",
    color: "#FBEE96",
  },
  {
    name: "Dhall",
    color: "#dfafff",
  },
  {
    name: "DIGITAL Command Language",
    color: null,
  },
  {
    name: "DirectX 3D File",
    color: "#aace60",
  },
  {
    name: "DM",
    color: "#447265",
  },
  {
    name: "Dockerfile",
    color: "#384d54",
  },
  {
    name: "Dogescript",
    color: "#cca760",
  },
  {
    name: "Dotenv",
    color: "#e5d559",
  },
  {
    name: "DTrace",
    color: null,
  },
  {
    name: "Dylan",
    color: "#6c616e",
  },
  {
    name: "E",
    color: "#ccce35",
  },
  {
    name: "Earthly",
    color: "#2af0ff",
  },
  {
    name: "Easybuild",
    color: "#069406",
  },
  {
    name: "eC",
    color: "#913960",
  },
  {
    name: "Ecere Projects",
    color: "#913960",
  },
  {
    name: "ECL",
    color: "#8a1267",
  },
  {
    name: "ECLiPSe",
    color: "#001d9d",
  },
  {
    name: "Ecmarkup",
    color: "#eb8131",
  },
  {
    name: "Edge",
    color: "#0dffe0",
  },
  {
    name: "EdgeQL",
    color: "#31A7FF",
  },
  {
    name: "EditorConfig",
    color: "#fff1f2",
  },
  {
    name: "Eiffel",
    color: "#4d6977",
  },
  {
    name: "EJS",
    color: "#a91e50",
  },
  {
    name: "Elixir",
    color: "#6e4a7e",
  },
  {
    name: "Elm",
    color: "#60B5CC",
  },
  {
    name: "Elvish",
    color: "#55BB55",
  },
  {
    name: "Elvish Transcript",
    color: "#55BB55",
  },
  {
    name: "Emacs Lisp",
    color: "#c065db",
  },
  {
    name: "EmberScript",
    color: "#FFF4F3",
  },
  {
    name: "EQ",
    color: "#a78649",
  },
  {
    name: "Erlang",
    color: "#B83998",
  },
  {
    name: "Euphoria",
    color: "#FF790B",
  },
  {
    name: "F#",
    color: "#b845fc",
  },
  {
    name: "F*",
    color: "#572e30",
  },
  {
    name: "Factor",
    color: "#636746",
  },
  {
    name: "Fancy",
    color: "#7b9db4",
  },
  {
    name: "Fantom",
    color: "#14253c",
  },
  {
    name: "Faust",
    color: "#c37240",
  },
  {
    name: "Fennel",
    color: "#fff3d7",
  },
  {
    name: "FIGlet Font",
    color: "#FFDDBB",
  },
  {
    name: "Filebench WML",
    color: "#F6B900",
  },
  {
    name: "Filterscript",
    color: null,
  },
  {
    name: "fish",
    color: "#4aae47",
  },
  {
    name: "Fluent",
    color: "#ffcc33",
  },
  {
    name: "FLUX",
    color: "#88ccff",
  },
  {
    name: "Forth",
    color: "#341708",
  },
  {
    name: "Fortran",
    color: "#4d41b1",
  },
  {
    name: "Fortran Free Form",
    color: "#4d41b1",
  },
  {
    name: "FreeBasic",
    color: "#141AC9",
  },
  {
    name: "FreeMarker",
    color: "#0050b2",
  },
  {
    name: "Frege",
    color: "#00cafe",
  },
  {
    name: "Futhark",
    color: "#5f021f",
  },
  {
    name: "G-code",
    color: "#D08CF2",
  },
  {
    name: "Game Maker Language",
    color: "#71b417",
  },
  {
    name: "GAML",
    color: "#FFC766",
  },
  {
    name: "GAMS",
    color: "#f49a22",
  },
  {
    name: "GAP",
    color: "#0000cc",
  },
  {
    name: "GCC Machine Description",
    color: "#FFCFAB",
  },
  {
    name: "GDB",
    color: null,
  },
  {
    name: "GDScript",
    color: "#355570",
  },
  {
    name: "GEDCOM",
    color: "#003058",
  },
  {
    name: "Gemfile.lock",
    color: "#701516",
  },
  {
    name: "Gemini",
    color: "#ff6900",
  },
  {
    name: "Genero 4gl",
    color: "#63408e",
  },
  {
    name: "Genero per",
    color: "#d8df39",
  },
  {
    name: "Genie",
    color: "#fb855d",
  },
  {
    name: "Genshi",
    color: "#951531",
  },
  {
    name: "Gentoo Ebuild",
    color: "#9400ff",
  },
  {
    name: "Gentoo Eclass",
    color: "#9400ff",
  },
  {
    name: "Gerber Image",
    color: "#d20b00",
  },
  {
    name: "Gherkin",
    color: "#5B2063",
  },
  {
    name: "Git Attributes",
    color: "#F44D27",
  },
  {
    name: "Git Config",
    color: "#F44D27",
  },
  {
    name: "Git Revision List",
    color: "#F44D27",
  },
  {
    name: "Gleam",
    color: "#ffaff3",
  },
  {
    name: "Glimmer JS",
    color: "#F5835F",
  },
  {
    name: "Glimmer TS",
    color: "#3178c6",
  },
  {
    name: "GLSL",
    color: "#5686a5",
  },
  {
    name: "Glyph",
    color: "#c1ac7f",
  },
  {
    name: "Gnuplot",
    color: "#f0a9f0",
  },
  {
    name: "Go",
    color: "#00ADD8",
  },
  {
    name: "Go Checksums",
    color: "#00ADD8",
  },
  {
    name: "Go Module",
    color: "#00ADD8",
  },
  {
    name: "Go Workspace",
    color: "#00ADD8",
  },
  {
    name: "Godot Resource",
    color: "#355570",
  },
  {
    name: "Golo",
    color: "#88562A",
  },
  {
    name: "Gosu",
    color: "#82937f",
  },
  {
    name: "Grace",
    color: "#615f8b",
  },
  {
    name: "Gradle",
    color: "#02303a",
  },
  {
    name: "Gradle Kotlin DSL",
    color: "#02303a",
  },
  {
    name: "Grammatical Framework",
    color: "#ff0000",
  },
  {
    name: "GraphQL",
    color: "#e10098",
  },
  {
    name: "Graphviz (DOT)",
    color: "#2596be",
  },
  {
    name: "Groovy",
    color: "#4298b8",
  },
  {
    name: "Groovy Server Pages",
    color: "#4298b8",
  },
  {
    name: "GSC",
    color: "#FF6800",
  },
  {
    name: "Hack",
    color: "#878787",
  },
  {
    name: "Haml",
    color: "#ece2a9",
  },
  {
    name: "Handlebars",
    color: "#f7931e",
  },
  {
    name: "HAProxy",
    color: "#106da9",
  },
  {
    name: "Harbour",
    color: "#0e60e3",
  },
  {
    name: "Haskell",
    color: "#5e5086",
  },
  {
    name: "Haxe",
    color: "#df7900",
  },
  {
    name: "HCL",
    color: "#844FBA",
  },
  {
    name: "HiveQL",
    color: "#dce200",
  },
  {
    name: "HLSL",
    color: "#aace60",
  },
  {
    name: "HOCON",
    color: "#9ff8ee",
  },
  {
    name: "HolyC",
    color: "#ffefaf",
  },
  {
    name: "hoon",
    color: "#00b171",
  },
  {
    name: "Hosts File",
    color: "#308888",
  },
  {
    name: "HTML",
    color: "#e34c26",
  },
  {
    name: "HTML+ECR",
    color: "#2e1052",
  },
  {
    name: "HTML+EEX",
    color: "#6e4a7e",
  },
  {
    name: "HTML+ERB",
    color: "#701516",
  },
  {
    name: "HTML+PHP",
    color: "#4f5d95",
  },
  {
    name: "HTML+Razor",
    color: "#512be4",
  },
  {
    name: "HTTP",
    color: "#005C9C",
  },
  {
    name: "HXML",
    color: "#f68712",
  },
  {
    name: "Hy",
    color: "#7790B2",
  },
  {
    name: "HyPhy",
    color: null,
  },
  {
    name: "IDL",
    color: "#a3522f",
  },
  {
    name: "Idris",
    color: "#b30000",
  },
  {
    name: "Ignore List",
    color: "#000000",
  },
  {
    name: "IGOR Pro",
    color: "#0000cc",
  },
  {
    name: "ImageJ Macro",
    color: "#99AAFF",
  },
  {
    name: "Imba",
    color: "#16cec6",
  },
  {
    name: "Inform 7",
    color: null,
  },
  {
    name: "INI",
    color: "#d1dbe0",
  },
  {
    name: "Ink",
    color: null,
  },
  {
    name: "Inno Setup",
    color: "#264b99",
  },
  {
    name: "Io",
    color: "#a9188d",
  },
  {
    name: "Ioke",
    color: "#078193",
  },
  {
    name: "Isabelle",
    color: "#FEFE00",
  },
  {
    name: "Isabelle ROOT",
    color: "#FEFE00",
  },
  {
    name: "J",
    color: "#9EEDFF",
  },
  {
    name: "Janet",
    color: "#0886a5",
  },
  {
    name: "JAR Manifest",
    color: "#b07219",
  },
  {
    name: "Jasmin",
    color: "#d03600",
  },
  {
    name: "Java",
    color: "#b07219",
  },
  {
    name: "Java Properties",
    color: "#2A6277",
  },
  {
    name: "Java Server Pages",
    color: "#2A6277",
  },
  {
    name: "JavaScript",
    color: "#f1e05a",
  },
  {
    name: "JavaScript+ERB",
    color: "#f1e05a",
  },
  {
    name: "JCL",
    color: "#d90e09",
  },
  {
    name: "Jest Snapshot",
    color: "#15c213",
  },
  {
    name: "JetBrains MPS",
    color: "#21D789",
  },
  {
    name: "JFlex",
    color: "#DBCA00",
  },
  {
    name: "Jinja",
    color: "#a52a22",
  },
  {
    name: "Jison",
    color: "#56b3cb",
  },
  {
    name: "Jison Lex",
    color: "#56b3cb",
  },
  {
    name: "Jolie",
    color: "#843179",
  },
  {
    name: "jq",
    color: "#c7254e",
  },
  {
    name: "JSON",
    color: "#292929",
  },
  {
    name: "JSON with Comments",
    color: "#292929",
  },
  {
    name: "JSON5",
    color: "#267CB9",
  },
  {
    name: "JSONiq",
    color: "#40d47e",
  },
  {
    name: "JSONLD",
    color: "#0c479c",
  },
  {
    name: "Jsonnet",
    color: "#0064bd",
  },
  {
    name: "Julia",
    color: "#a270ba",
  },
  {
    name: "Jupyter Notebook",
    color: "#DA5B0B",
  },
  {
    name: "Just",
    color: "#384d54",
  },
  {
    name: "Kaitai Struct",
    color: "#773b37",
  },
  {
    name: "KakouneScript",
    color: "#6f8042",
  },
  {
    name: "KerboScript",
    color: "#41adf0",
  },
  {
    name: "KiCad Layout",
    color: "#2f4aab",
  },
  {
    name: "KiCad Legacy Layout",
    color: "#2f4aab",
  },
  {
    name: "KiCad Schematic",
    color: "#2f4aab",
  },
  {
    name: "Kotlin",
    color: "#A97BFF",
  },
  {
    name: "KRL",
    color: "#28430A",
  },
  {
    name: "kvlang",
    color: "#1da6e0",
  },
  {
    name: "LabVIEW",
    color: "#fede06",
  },
  {
    name: "Lark",
    color: "#2980B9",
  },
  {
    name: "Lasso",
    color: "#999999",
  },
  {
    name: "Latte",
    color: "#f2a542",
  },
  {
    name: "Lean",
    color: null,
  },
  {
    name: "Lean 4",
    color: null,
  },
  {
    name: "Less",
    color: "#1d365d",
  },
  {
    name: "Lex",
    color: "#DBCA00",
  },
  {
    name: "LFE",
    color: "#4C3023",
  },
  {
    name: "LigoLANG",
    color: "#0e74ff",
  },
  {
    name: "LilyPond",
    color: "#9ccc7c",
  },
  {
    name: "Limbo",
    color: null,
  },
  {
    name: "Liquid",
    color: "#67b8de",
  },
  {
    name: "Literate Agda",
    color: "#315665",
  },
  {
    name: "Literate CoffeeScript",
    color: "#244776",
  },
  {
    name: "Literate Haskell",
    color: "#5e5086",
  },
  {
    name: "LiveScript",
    color: "#499886",
  },
  {
    name: "LLVM",
    color: "#185619",
  },
  {
    name: "Logos",
    color: null,
  },
  {
    name: "Logtalk",
    color: "#295b9a",
  },
  {
    name: "LOLCODE",
    color: "#cc9900",
  },
  {
    name: "LookML",
    color: "#652B81",
  },
  {
    name: "LoomScript",
    color: null,
  },
  {
    name: "LSL",
    color: "#3d9970",
  },
  {
    name: "Lua",
    color: "#000080",
  },
  {
    name: "M",
    color: null,
  },
  {
    name: "M4",
    color: null,
  },
  {
    name: "M4Sugar",
    color: null,
  },
  {
    name: "Macaulay2",
    color: "#d8ffff",
  },
  {
    name: "Makefile",
    color: "#427819",
  },
  {
    name: "Mako",
    color: "#7e858d",
  },
  {
    name: "Markdown",
    color: "#083fa1",
  },
  {
    name: "Marko",
    color: "#42bff2",
  },
  {
    name: "Mask",
    color: "#f97732",
  },
  {
    name: "Mathematica",
    color: "#dd1100",
  },
  {
    name: "MATLAB",
    color: "#e16737",
  },
  {
    name: "Max",
    color: "#c4a79c",
  },
  {
    name: "MAXScript",
    color: "#00a6a6",
  },
  {
    name: "mcfunction",
    color: "#E22837",
  },
  {
    name: "MDX",
    color: "#fcb32c",
  },
  {
    name: "Mercury",
    color: "#ff2b2b",
  },
  {
    name: "Mermaid",
    color: "#ff3670",
  },
  {
    name: "Meson",
    color: "#007800",
  },
  {
    name: "Metal",
    color: "#8f14e9",
  },
  {
    name: "MiniD",
    color: null,
  },
  {
    name: "MiniYAML",
    color: "#ff1111",
  },
  {
    name: "Mint",
    color: "#02b046",
  },
  {
    name: "Mirah",
    color: "#c7a938",
  },
  {
    name: "mIRC Script",
    color: "#3d57c3",
  },
  {
    name: "MLIR",
    color: "#5EC8DB",
  },
  {
    name: "Modelica",
    color: "#de1d31",
  },
  {
    name: "Modula-2",
    color: "#10253f",
  },
  {
    name: "Modula-3",
    color: "#223388",
  },
  {
    name: "Module Management System",
    color: null,
  },
  {
    name: "Mojo",
    color: "#ff4c1f",
  },
  {
    name: "Monkey",
    color: null,
  },
  {
    name: "Monkey C",
    color: "#8D6747",
  },
  {
    name: "Moocode",
    color: null,
  },
  {
    name: "MoonScript",
    color: "#ff4585",
  },
  {
    name: "Motoko",
    color: "#fbb03b",
  },
  {
    name: "Motorola 68K Assembly",
    color: "#005daa",
  },
  {
    name: "Move",
    color: "#4a137a",
  },
  {
    name: "MQL4",
    color: "#62A8D6",
  },
  {
    name: "MQL5",
    color: "#4A76B8",
  },
  {
    name: "MTML",
    color: "#b7e1f4",
  },
  {
    name: "MUF",
    color: null,
  },
  {
    name: "mupad",
    color: "#244963",
  },
  {
    name: "Mustache",
    color: "#724b3b",
  },
  {
    name: "Myghty",
    color: null,
  },
  {
    name: "nanorc",
    color: "#2d004d",
  },
  {
    name: "Nasal",
    color: "#1d2c4e",
  },
  {
    name: "NASL",
    color: null,
  },
  {
    name: "NCL",
    color: "#28431f",
  },
  {
    name: "Nearley",
    color: "#990000",
  },
  {
    name: "Nemerle",
    color: "#3d3c6e",
  },
  {
    name: "nesC",
    color: "#94B0C7",
  },
  {
    name: "NetLinx",
    color: "#0aa0ff",
  },
  {
    name: "NetLinx+ERB",
    color: "#747faa",
  },
  {
    name: "NetLogo",
    color: "#ff6375",
  },
  {
    name: "NewLisp",
    color: "#87AED7",
  },
  {
    name: "Nextflow",
    color: "#3ac486",
  },
  {
    name: "Nginx",
    color: "#009639",
  },
  {
    name: "Nim",
    color: "#ffc200",
  },
  {
    name: "Nit",
    color: "#009917",
  },
  {
    name: "Nix",
    color: "#7e7eff",
  },
  {
    name: "NPM Config",
    color: "#cb3837",
  },
  {
    name: "NSIS",
    color: null,
  },
  {
    name: "Nu",
    color: "#c9df40",
  },
  {
    name: "NumPy",
    color: "#9C8AF9",
  },
  {
    name: "Nunjucks",
    color: "#3d8137",
  },
  {
    name: "Nushell",
    color: "#4E9906",
  },
  {
    name: "NWScript",
    color: "#111522",
  },
  {
    name: "OASv2-json",
    color: "#85ea2d",
  },
  {
    name: "OASv2-yaml",
    color: "#85ea2d",
  },
  {
    name: "OASv3-json",
    color: "#85ea2d",
  },
  {
    name: "OASv3-yaml",
    color: "#85ea2d",
  },
  {
    name: "Oberon",
    color: null,
  },
  {
    name: "Objective-C",
    color: "#438eff",
  },
  {
    name: "Objective-C++",
    color: "#6866fb",
  },
  {
    name: "Objective-J",
    color: "#ff0c5a",
  },
  {
    name: "ObjectScript",
    color: "#424893",
  },
  {
    name: "OCaml",
    color: "#ef7a08",
  },
  {
    name: "Odin",
    color: "#60AFFE",
  },
  {
    name: "Omgrofl",
    color: "#cabbff",
  },
  {
    name: "ooc",
    color: "#b0b77e",
  },
  {
    name: "Opa",
    color: null,
  },
  {
    name: "Opal",
    color: "#f7ede0",
  },
  {
    name: "Open Policy Agent",
    color: "#7d9199",
  },
  {
    name: "OpenAPI Specification v2",
    color: "#85ea2d",
  },
  {
    name: "OpenAPI Specification v3",
    color: "#85ea2d",
  },
  {
    name: "OpenCL",
    color: "#ed2e2d",
  },
  {
    name: "OpenEdge ABL",
    color: "#5ce600",
  },
  {
    name: "OpenQASM",
    color: "#AA70FF",
  },
  {
    name: "OpenRC runscript",
    color: null,
  },
  {
    name: "OpenSCAD",
    color: "#e5cd45",
  },
  {
    name: "Option List",
    color: "#476732",
  },
  {
    name: "Org",
    color: "#77aa99",
  },
  {
    name: "Ox",
    color: null,
  },
  {
    name: "Oxygene",
    color: "#cdd0e3",
  },
  {
    name: "Oz",
    color: "#fab738",
  },
  {
    name: "P4",
    color: "#7055b5",
  },
  {
    name: "Pact",
    color: "#F7A8B8",
  },
  {
    name: "Pan",
    color: "#cc0000",
  },
  {
    name: "Papyrus",
    color: "#6600cc",
  },
  {
    name: "Parrot",
    color: "#f3ca0a",
  },
  {
    name: "Parrot Assembly",
    color: null,
  },
  {
    name: "Parrot Internal Representation",
    color: null,
  },
  {
    name: "Pascal",
    color: "#E3F171",
  },
  {
    name: "Pawn",
    color: "#dbb284",
  },
  {
    name: "PDDL",
    color: "#0d00ff",
  },
  {
    name: "PEG.js",
    color: "#234d6b",
  },
  {
    name: "Pep8",
    color: "#C76F5B",
  },
  {
    name: "Perl",
    color: "#0298c3",
  },
  {
    name: "PHP",
    color: "#4F5D95",
  },
  {
    name: "PicoLisp",
    color: "#6067af",
  },
  {
    name: "PigLatin",
    color: "#fcd7de",
  },
  {
    name: "Pike",
    color: "#005390",
  },
  {
    name: "Pip Requirements",
    color: "#FFD343",
  },
  {
    name: "PlantUML",
    color: "#fbbd16",
  },
  {
    name: "PLpgSQL",
    color: "#336790",
  },
  {
    name: "PLSQL",
    color: "#dad8d8",
  },
  {
    name: "PogoScript",
    color: "#d80074",
  },
  {
    name: "Polar",
    color: "#ae81ff",
  },
  {
    name: "Pony",
    color: null,
  },
  {
    name: "Portugol",
    color: "#f8bd00",
  },
  {
    name: "PostCSS",
    color: "#dc3a0c",
  },
  {
    name: "PostScript",
    color: "#da291c",
  },
  {
    name: "POV-Ray SDL",
    color: "#6bac65",
  },
  {
    name: "PowerBuilder",
    color: "#8f0f8d",
  },
  {
    name: "PowerShell",
    color: "#012456",
  },
  {
    name: "Praat",
    color: "#c8506d",
  },
  {
    name: "Prisma",
    color: "#0c344b",
  },
  {
    name: "Processing",
    color: "#0096D8",
  },
  {
    name: "Procfile",
    color: "#3B2F63",
  },
  {
    name: "Prolog",
    color: "#74283c",
  },
  {
    name: "Promela",
    color: "#de0000",
  },
  {
    name: "Propeller Spin",
    color: "#7fa2a7",
  },
  {
    name: "Pug",
    color: "#a86454",
  },
  {
    name: "Puppet",
    color: "#302B6D",
  },
  {
    name: "PureBasic",
    color: "#5a6986",
  },
  {
    name: "PureScript",
    color: "#1D222D",
  },
  {
    name: "Pyret",
    color: "#ee1e10",
  },
  {
    name: "Python",
    color: "#3572A5",
  },
  {
    name: "Python console",
    color: "#3572A5",
  },
  {
    name: "Python traceback",
    color: "#3572A5",
  },
  {
    name: "q",
    color: "#0040cd",
  },
  {
    name: "Q#",
    color: "#fed659",
  },
  {
    name: "QMake",
    color: null,
  },
  {
    name: "QML",
    color: "#44a51c",
  },
  {
    name: "Qt Script",
    color: "#00b841",
  },
  {
    name: "Quake",
    color: "#882233",
  },
  {
    name: "R",
    color: "#198CE7",
  },
  {
    name: "Racket",
    color: "#3c5caa",
  },
  {
    name: "Ragel",
    color: "#9d5200",
  },
  {
    name: "Raku",
    color: "#0000fb",
  },
  {
    name: "RAML",
    color: "#77d9fb",
  },
  {
    name: "Rascal",
    color: "#fffaa0",
  },
  {
    name: "RBS",
    color: "#701516",
  },
  {
    name: "RDoc",
    color: "#701516",
  },
  {
    name: "REALbasic",
    color: null,
  },
  {
    name: "Reason",
    color: "#ff5847",
  },
  {
    name: "ReasonLIGO",
    color: "#ff5847",
  },
  {
    name: "Rebol",
    color: "#358a5b",
  },
  {
    name: "Record Jar",
    color: "#0673ba",
  },
  {
    name: "Red",
    color: "#f50000",
  },
  {
    name: "Redcode",
    color: null,
  },
  {
    name: "Regular Expression",
    color: "#009a00",
  },
  {
    name: "Ren'Py",
    color: "#ff7f7f",
  },
  {
    name: "RenderScript",
    color: null,
  },
  {
    name: "ReScript",
    color: "#ed5051",
  },
  {
    name: "reStructuredText",
    color: "#141414",
  },
  {
    name: "REXX",
    color: "#d90e09",
  },
  {
    name: "Rez",
    color: "#FFDAB3",
  },
  {
    name: "Ring",
    color: "#2D54CB",
  },
  {
    name: "Riot",
    color: "#A71E49",
  },
  {
    name: "RMarkdown",
    color: "#198ce7",
  },
  {
    name: "RobotFramework",
    color: "#00c0b5",
  },
  {
    name: "Roc",
    color: "#7c38f5",
  },
  {
    name: "Roff",
    color: "#ecdebe",
  },
  {
    name: "Roff Manpage",
    color: "#ecdebe",
  },
  {
    name: "Rouge",
    color: "#cc0088",
  },
  {
    name: "RouterOS Script",
    color: "#DE3941",
  },
  {
    name: "RPC",
    color: null,
  },
  {
    name: "RPGLE",
    color: "#2BDE21",
  },
  {
    name: "Ruby",
    color: "#701516",
  },
  {
    name: "RUNOFF",
    color: "#665a4e",
  },
  {
    name: "Rust",
    color: "#dea584",
  },
  {
    name: "Sage",
    color: null,
  },
  {
    name: "SaltStack",
    color: "#646464",
  },
  {
    name: "SAS",
    color: "#B34936",
  },
  {
    name: "Sass",
    color: "#a53b70",
  },
  {
    name: "Scala",
    color: "#c22d40",
  },
  {
    name: "Scaml",
    color: "#bd181a",
  },
  {
    name: "Scenic",
    color: "#fdc700",
  },
  {
    name: "Scheme",
    color: "#1e4aec",
  },
  {
    name: "Scilab",
    color: "#ca0f21",
  },
  {
    name: "SCSS",
    color: "#c6538c",
  },
  {
    name: "sed",
    color: "#64b970",
  },
  {
    name: "Self",
    color: "#0579aa",
  },
  {
    name: "ShaderLab",
    color: "#222c37",
  },
  {
    name: "Shell",
    color: "#89e051",
  },
  {
    name: "ShellCheck Config",
    color: "#cecfcb",
  },
  {
    name: "ShellSession",
    color: null,
  },
  {
    name: "Shen",
    color: "#120F14",
  },
  {
    name: "Sieve",
    color: null,
  },
  {
    name: "Simple File Verification",
    color: "#C9BFED",
  },
  {
    name: "Singularity",
    color: "#64E6AD",
  },
  {
    name: "Slash",
    color: "#007eff",
  },
  {
    name: "Slice",
    color: "#003fa2",
  },
  {
    name: "Slim",
    color: "#2b2b2b",
  },
  {
    name: "Slint",
    color: "#2379F4",
  },
  {
    name: "Smali",
    color: null,
  },
  {
    name: "Smalltalk",
    color: "#596706",
  },
  {
    name: "Smarty",
    color: "#f0c040",
  },
  {
    name: "Smithy",
    color: "#c44536",
  },
  {
    name: "SmPL",
    color: "#c94949",
  },
  {
    name: "SMT",
    color: null,
  },
  {
    name: "Snakemake",
    color: "#419179",
  },
  {
    name: "Solidity",
    color: "#AA6746",
  },
  {
    name: "SourcePawn",
    color: "#f69e1d",
  },
  {
    name: "SPARQL",
    color: "#0C4597",
  },
  {
    name: "SQF",
    color: "#3F3F3F",
  },
  {
    name: "SQL",
    color: "#e38c00",
  },
  {
    name: "SQLPL",
    color: "#e38c00",
  },
  {
    name: "Squirrel",
    color: "#800000",
  },
  {
    name: "SRecode Template",
    color: "#348a34",
  },
  {
    name: "Stan",
    color: "#b2011d",
  },
  {
    name: "Standard ML",
    color: "#dc566d",
  },
  {
    name: "Starlark",
    color: "#76d275",
  },
  {
    name: "Stata",
    color: "#1a5f91",
  },
  {
    name: "STL",
    color: "#373b5e",
  },
  {
    name: "StringTemplate",
    color: "#3fb34f",
  },
  {
    name: "Stylus",
    color: "#ff6347",
  },
  {
    name: "SubRip Text",
    color: "#9e0101",
  },
  {
    name: "SugarSS",
    color: "#2fcc9f",
  },
  {
    name: "SuperCollider",
    color: "#46390b",
  },
  {
    name: "Svelte",
    color: "#ff3e00",
  },
  {
    name: "SVG",
    color: "#ff9900",
  },
  {
    name: "Sway",
    color: "#00F58C",
  },
  {
    name: "Sweave",
    color: "#198ce7",
  },
  {
    name: "Swift",
    color: "#F05138",
  },
  {
    name: "SWIG",
    color: null,
  },
  {
    name: "SystemVerilog",
    color: "#DAE1C2",
  },
  {
    name: "Talon",
    color: "#333333",
  },
  {
    name: "Tcl",
    color: "#e4cc98",
  },
  {
    name: "Tcsh",
    color: null,
  },
  {
    name: "Terra",
    color: "#00004c",
  },
  {
    name: "Terraform Template",
    color: "#7b42bb",
  },
  {
    name: "TeX",
    color: "#3D6117",
  },
  {
    name: "TextGrid",
    color: "#c8506d",
  },
  {
    name: "Textile",
    color: "#ffe7ac",
  },
  {
    name: "TextMate Properties",
    color: "#df66e4",
  },
  {
    name: "Thrift",
    color: "#D12127",
  },
  {
    name: "TI Program",
    color: "#A0AA87",
  },
  {
    name: "TL-Verilog",
    color: "#C40023",
  },
  {
    name: "TLA",
    color: "#4b0079",
  },
  {
    name: "Toit",
    color: "#c2c9fb",
  },
  {
    name: "TOML",
    color: "#9c4221",
  },
  {
    name: "TSQL",
    color: "#e38c00",
  },
  {
    name: "TSV",
    color: "#237346",
  },
  {
    name: "TSX",
    color: "#3178c6",
  },
  {
    name: "Turing",
    color: "#cf142b",
  },
  {
    name: "Twig",
    color: "#c1d026",
  },
  {
    name: "TXL",
    color: "#0178b8",
  },
  {
    name: "TypeScript",
    color: "#3178c6",
  },
  {
    name: "Typst",
    color: "#239dad",
  },
  {
    name: "Unified Parallel C",
    color: "#4e3617",
  },
  {
    name: "Unity3D Asset",
    color: "#222c37",
  },
  {
    name: "Unix Assembly",
    color: null,
  },
  {
    name: "Uno",
    color: "#9933cc",
  },
  {
    name: "UnrealScript",
    color: "#a54c4d",
  },
  {
    name: "UrWeb",
    color: "#ccccee",
  },
  {
    name: "V",
    color: "#4f87c4",
  },
  {
    name: "Vala",
    color: "#a56de2",
  },
  {
    name: "Valve Data Format",
    color: "#f26025",
  },
  {
    name: "VBA",
    color: "#867db1",
  },
  {
    name: "VBScript",
    color: "#15dcdc",
  },
  {
    name: "VCL",
    color: "#148AA8",
  },
  {
    name: "Velocity Template Language",
    color: "#507cff",
  },
  {
    name: "Verilog",
    color: "#b2b7f8",
  },
  {
    name: "VHDL",
    color: "#adb2cb",
  },
  {
    name: "Vim Help File",
    color: "#199f4b",
  },
  {
    name: "Vim Script",
    color: "#199f4b",
  },
  {
    name: "Vim Snippet",
    color: "#199f4b",
  },
  {
    name: "Visual Basic .NET",
    color: "#945db7",
  },
  {
    name: "Visual Basic 6.0",
    color: "#2c6353",
  },
  {
    name: "Volt",
    color: "#1F1F1F",
  },
  {
    name: "Vue",
    color: "#41b883",
  },
  {
    name: "Vyper",
    color: "#2980b9",
  },
  {
    name: "WDL",
    color: "#42f1f4",
  },
  {
    name: "Web Ontology Language",
    color: "#5b70bd",
  },
  {
    name: "WebAssembly",
    color: "#04133b",
  },
  {
    name: "WebAssembly Interface Type",
    color: "#6250e7",
  },
  {
    name: "WebIDL",
    color: null,
  },
  {
    name: "WGSL",
    color: "#1a5e9a",
  },
  {
    name: "Whiley",
    color: "#d5c397",
  },
  {
    name: "Wikitext",
    color: "#fc5757",
  },
  {
    name: "Windows Registry Entries",
    color: "#52d5ff",
  },
  {
    name: "wisp",
    color: "#7582D1",
  },
  {
    name: "Witcher Script",
    color: "#ff0000",
  },
  {
    name: "Wollok",
    color: "#a23738",
  },
  {
    name: "World of Warcraft Addon Data",
    color: "#f7e43f",
  },
  {
    name: "Wren",
    color: "#383838",
  },
  {
    name: "X10",
    color: "#4B6BEF",
  },
  {
    name: "xBase",
    color: "#403a40",
  },
  {
    name: "XC",
    color: "#99DA07",
  },
  {
    name: "XML",
    color: "#0060ac",
  },
  {
    name: "XML Property List",
    color: "#0060ac",
  },
  {
    name: "Xojo",
    color: "#81bd41",
  },
  {
    name: "Xonsh",
    color: "#285EEF",
  },
  {
    name: "XProc",
    color: null,
  },
  {
    name: "XQuery",
    color: "#5232e7",
  },
  {
    name: "XS",
    color: null,
  },
  {
    name: "XSLT",
    color: "#EB8CEB",
  },
  {
    name: "Xtend",
    color: "#24255d",
  },
  {
    name: "Yacc",
    color: "#4B6C4B",
  },
  {
    name: "YAML",
    color: "#cb171e",
  },
  {
    name: "YARA",
    color: "#220000",
  },
  {
    name: "YASnippet",
    color: "#32AB90",
  },
  {
    name: "Yul",
    color: "#794932",
  },
  {
    name: "ZAP",
    color: "#0d665e",
  },
  {
    name: "Zeek",
    color: null,
  },
  {
    name: "ZenScript",
    color: "#00BCD1",
  },
  {
    name: "Zephir",
    color: "#118f9e",
  },
  {
    name: "Zig",
    color: "#ec915c",
  },
  {
    name: "ZIL",
    color: "#dc75e5",
  },
  {
    name: "Zimpl",
    color: "#d67711",
  },
];

const allColors = [...CUSTOM_COLORS, ...GITHUB_COLORS];
export default allColors;

