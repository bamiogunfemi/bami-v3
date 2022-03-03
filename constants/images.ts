import logo from "../public/images/logo.svg";
import contact from "../public/images/contact.svg";
import blog from "../public/images/blog.svg";
import work from "../public/images/work.svg";
import timeline from "../public/images/timeline.svg";
import profile from "../public/images/profile.svg";
import download from "../public/images/download.svg";
import downloaded from "../public/images/downloaded.svg";

type imageType = {
  [key: string]: string;
};

export const images: imageType = {
  logo,
  contact,
  blog,
  work,
  profile,
  timeline,
  download,
  downloaded,
};

export const toArray = () => {
  let keys = Object.keys(images);
  return keys.map((key: string) => images[key]);
};
