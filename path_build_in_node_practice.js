console.log("========================PATH module========================");
// path module allow us to interact with file path easily
/*
n Node.js, the path module is a built-in module that provides utilities for working with file and directory paths. It helps you manipulate and interact with file paths in a platform-independent manner, regardless of the underlying operating system. This is especially important because different operating systems use different conventions for representing file paths.
The path module offers various methods for common path-related tasks, such as:
Joining Paths: The path.join() method is used to concatenate path segments together while taking care of platform-specific path separators (e.g., / on Unix-like systems and \ on Windows).
Normalizing Paths: The path.normalize() method simplifies and cleans up paths by resolving relative path components (e.g., . and ..) and converting forward slashes to the appropriate platform-specific separator.
Resolving Paths: The path.resolve() method returns an absolute path by resolving the given path segments relative to the current working directory.
Extracting Components: Methods like path.dirname(), path.basename(), and path.extname() allow you to extract specific components (directory name, file name, and file extension) from a given path.
Parsing Paths: The path.parse() method parses a path string into an object with properties representing its different components (root, dir, base, ext, and name).

Calculating Relative Paths: The path.relative() method calculates the relative path between two given paths.
 */

const path = require("path"); // if file or directory in OS will be changed, path module will change everything in utilized path method automatically
// to return platform specific path separator
console.log(path.sep);
// to join sequence of path segments. we can pass parts of parts and join() will build path base on system separator and return valid path to needed file
const pathJoin = path.join("/folder//", "/subfolder/", "/text.txt"); // all no necessary or wrong separate wor current OS will be removed
console.log(pathJoin);

// to get base of path
const base = path.basename(pathJoin);
console.log(base);// will return text.txt
// to return absolute path

const absolutPath = path.resolve(__dirname, "folder", "subfolder", "text.txt");
console.log(absolutPath);// return absolute path



