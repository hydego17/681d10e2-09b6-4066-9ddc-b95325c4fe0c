export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", {
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  }).then((res) => res.json());

  return res as any;
}

export async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts", {
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 },
  }).then((res) => res.json());

  return res as any;
}
