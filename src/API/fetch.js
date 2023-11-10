export async function fetchId() {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const id = await response.json();
  return id;
}
// const stories = [];
// export function mapUrlById(id) {
//   const getId = id;

//   getId.map(async (item, index) => {
//     if (index <= 30) {
//       const response = await fetch(
//         `https://hacker-news.firebaseio.com/v0/item/${item}.json`
//       );

//       stories.push(await response.json());
//     }
//   });

//   return stories;
// }
// export { stories };

// get the array of ids
// then for each element in the ids array map urls to a state
// fetch data from the state and pass it in the body
