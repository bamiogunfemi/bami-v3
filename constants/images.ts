import logo from "../public/images/logo.svg";
import contact from "../public/images/contact.svg";
import blog from "../public/images/blog.svg";
import work from "../public/images/work.svg";
import timeline from "../public/images/timeline.svg";
import profile from "../public/images/profile.svg";

export const images = {
  logo,
  contact,
  blog,
  work,
  profile,
  timeline,
};
export const toArray = () => {
  let keys = Object.keys(images);
  return keys.map((key) => images[key]);
};
