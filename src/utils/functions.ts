export const fetchGithubUser = async (searchFilter: string) => {
  const res = await fetch(`https://api.github.com/users/${searchFilter}`);
  if (!res.ok) {
    throw new Error("API error occured");
  }
  const user = await res.json();
  return user;
};
