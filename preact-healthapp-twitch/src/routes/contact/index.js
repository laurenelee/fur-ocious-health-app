import { h } from "preact";
import { lazy, Suspense } from "preact/compat";
import style from "./style";
let Video;
if (typeof window !== "undefined") {
  Video = lazy(() => import("../../components/video/video.js"));
}
const photographs = (props) => {
  return (
    <div class={style.pageContact}>
      <h1 class={style.pageTitle}> Hello. </h1>{" "}
      <p> Enable your audio and video to begin. </p>{" "}
      <div class={style.formWrapper}>
        <Suspense fallback={<div> loading... </div>}>
          {" "}
          <Video />
        </Suspense>{" "}
      </div>{" "}
    </div>
  );
};

export default photographs;
