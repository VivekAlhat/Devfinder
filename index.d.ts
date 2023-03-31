interface IUser {
  login: string;
  avatar_url: string;
  github_url: string;
  name: string;
  blog: string;
  company: string | null;
  location: string;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface IFormInputProps {
  searchFilter: string;
  handleClick: (newSearchFilter: string) => void;
}
