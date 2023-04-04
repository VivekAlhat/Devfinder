import {
  LinkIcon,
  BuildingOffice2Icon,
  MapPinIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { fetchGithubUser } from "../utils/functions";
import Idle from "./Idle";
import moment from "moment";
import Loader from "./Loader";

const UserInfo = ({ username }: { username: string }): any => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    user: null,
    state: "idle",
    error: null,
  });

  const { user, state, error } = userInfo;

  useEffect(() => {
    if (!username) {
      return;
    }
    setUserInfo((prev) => ({ ...prev, state: "pending" }));
    fetchGithubUser(username)
      .then((user) => {
        setUserInfo((prev) => ({ ...prev, user, state: "resolved" }));
      })
      .catch((error) => {
        setUserInfo((prev) => ({
          ...prev,
          error: { ...error, message: "API Error Occurred." },
          state: "rejected",
        }));
      });
  }, [username]);

  if (state === "idle") {
    return <Idle />;
  } else if (state === "pending") {
    return (
      <div className="grid h-48 place-content-center">
        <Loader />
      </div>
    );
  } else if (state === "rejected") {
    throw error;
  } else if (state === "resolved") {
    return (
      <div
        className={`p-8 rounded-xl border border-zinc-500 grid sm:grid-cols-4 gap-6`}
      >
        <img
          src={
            user?.avatar_url ??
            "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          }
          alt={user?.name}
          className="rounded-full w-20 h-20 sm:w-32 sm:h-32 col-span-1"
        />
        <div className="grow flex flex-col col-span-3 sm:col-start-2 sm:col-span-3">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
            <div className="space-y-1">
              <p className="text-xl sm:text-3xl font-bold">
                {user?.name && user.name.length > 0
                  ? user.name
                  : "Username not found"}
              </p>
              <p className="text-blue-500 font-medium">
                @{user?.login ?? "Username not found"}
              </p>
            </div>
            <p>Joined {moment(user?.created_at).format("MMM Do YY")}</p>
          </div>
        </div>
        <p className="text-md sm:text-lg col-start-1 col-span-4 sm:col-start-2 sm:col-span-3 sm:-mt-16">
          {user?.bio ?? "This profile has no bio."}
        </p>
        <div
          className={`flex items-center justify-between border border-zinc-500  p-5 sm:px-12 rounded-xl col-start-1 col-span-4 sm:col-start-2 sm:col-span-3 sm:-mt-8`}
        >
          <div>
            <p>Repos</p>
            <p className="text-xl sm:text-3xl font-bold text-center">
              {user?.public_repos ?? 0}
            </p>
          </div>
          <div>
            <p>Followers</p>
            <p className="text-xl sm:text-3xl font-bold text-center">
              {user?.followers ?? 0}
            </p>
          </div>
          <div>
            <p>Following</p>
            <p className="text-xl sm:text-3xl font-bold text-center">
              {user?.following ?? 0}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 col-start-1 col-span-4 sm:col-start-2 sm:col-span-3">
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4" />
            <p>{user?.location ?? "Location not found"}</p>
          </div>
          <div className="flex items-center gap-2">
            <ChatBubbleBottomCenterIcon className="h-4 w-4" />
            <p>{user?.twitter_username ?? "Twitter not found"}</p>
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon className="h-4 w-4" />
            <p>
              {user?.blog && user?.blog.length > 0
                ? user?.blog.substring(0, 35)
                : "Website not found"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <BuildingOffice2Icon className="h-4 w-4" />
            <p>{user?.company ?? "Org not found"}</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default UserInfo;
