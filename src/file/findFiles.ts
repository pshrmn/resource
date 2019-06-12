import glob from "glob";

export default function findFiles(path: string): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    glob(
      path,
      (err, matches) => {
        if (err) {
          reject(err);
        } else {
          resolve(matches);
        }
      }
    );
  });
}