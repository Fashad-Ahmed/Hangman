const programmingLanguages = [
  "python",
  "javascript",
  "typescript",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "kotlin",
  "php",
  "sql",
  "ruby",
  "fortran",
  "rust",
  "swift",
  "scala",
  "haskell",
  "erlang",
  "elixir",
  "clojure",
  "go",
  "dart",
  "elm",
  "coffeescript",
  "lua",
  "groovy",
  "r",
  "perl",
];

export const randomProgrammingLanguage = () => {
  return programmingLanguages[
    Math.floor(Math.random() * programmingLanguages.length)
  ];
};