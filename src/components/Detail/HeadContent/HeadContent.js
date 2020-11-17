import React from "react";
function HeadContent() {
  return (
    <div className="MuiContainer-root MuiContainer-maxWidthLg">
      <div className="MuiPaper-root jss356 MuiPaper-elevation1 MuiPaper-rounded">
        <div className="MuiContainer-root MuiContainer-maxWidthXl">
          <div>
            <p>
              Hi everyone, long time no see 👋. Today, I am very excited to talk
              to you guys about <strong>AutoMapper</strong> (
              <code className="language-text">@nartc/automapper</code>) version
              6. This is a release with an <em>almost complete</em> rewritten
              core and some small changes to the public API, for the better.
            </p>
            <blockquote>
              <p>
                If you do not know about <strong>AutoMapper</strong>, you can
                find out more about it via this blog post{" "}
                <a href="/blogs/introduction-to-automapper-typescript">
                  Introduction to AutoMapper TypeScript
                </a>{" "}
                or{" "}
                <a
                  href="https://github.com/nartc/mapper"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  Github
                </a>
              </p>
            </blockquote>
            <h2 id="update-03242020" style={{ position: "relative" }}>
              <a
                href="#update-03242020"
                aria-label="update 03242020 permalink"
                className="anchor before"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height={16}
                  version="1.1"
                  viewBox="0 0 16 16"
                  width={16}
                >
                  <path
                    fillRule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              Update 03/24/2020
            </h2>
            <p>
              I have updated the benchmark code and have ran all benchmarks 100
              times instead of 10 times. You can check out the benchmark repo{" "}
              <a
                href="https://github.com/nartc/ng-automapper-bench"
                target="_blank"
                rel="nofollow noreferrer"
              >
                here
              </a>
            </p>
            <h2 id="whats-new" style={{ position: "relative" }}>
              <a
                href="#whats-new"
                aria-label="whats new permalink"
                className="anchor before"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height={16}
                  version="1.1"
                  viewBox="0 0 16 16"
                  width={16}
                >
                  <path
                    fillRule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              What’s new?
            </h2>
            <p>
              This v6 release does not contain many changes regarding the public
              API but performance, bundle-size, critical bug fixes, and a stab
              at <strong>JavaScript</strong> support were the main targets of
              this release. Let’s explore 💪
            </p>
            <h2 id="performance" style={{ position: "relative" }}>
              <a
                href="#performance"
                aria-label="performance permalink"
                className="anchor before"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height={16}
                  version="1.1"
                  viewBox="0 0 16 16"
                  width={16}
                >
                  <path
                    fillRule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              Performance
            </h2>
            <p>
              For libraries that deal with transforming data like{" "}
              <strong>AutoMapper</strong>, performance is not to take lightly.
              However before we dive into the performance of{" "}
              <strong>AutoMapper</strong>, I want to emphasize the initial
              purpose of me creating this library which is to transform{" "}
              <strong>Domain Model (database)</strong> to{" "}
              <strong>View Model (client/frontend)</strong> via API calls. This
              is to point out that the number of items going back and forth
              Network Calls should not be too many like hundreds of thousands or
              millions of objects going through a single network call. With that
              in mind,
              <strong>mapping</strong> such big amount of objects at once is not
              realistic in my opinion. Although, I would love for{" "}
              <strong>AutoMapper</strong> to have better performance than not.
              Let’s take a look at some simple statistics, shall we?
            </p>
            <p>
              First, let’s look at the models I am going to use for this
              benchmark:
            </p>
            <div
              className="gatsby-code-button-container"
              data-toaster-id={54138227621060800000}
              data-toaster-class="gatsby-code-button-toaster"
              data-toaster-text-class="gatsby-code-button-toaster-text"
              data-toaster-text="Copied to clipboard 📋"
              data-toaster-duration={3500}
              onclick="copyToClipboard(`class Bio {
job: string;
age: number;
birthday: Date;
}

class User {
firstName: string;
lastName: string;
bio: Bio;
}`, `54138227621060800000`)"
            >
              <div className="gatsby-code-button" data-tooltip>
                <svg
                  className="gatsby-code-button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" />
                </svg>
              </div>
            </div>
            <div className="gatsby-highlight" data-language="typescript">
              <pre
                style={{ counterReset: "linenumber NaN" }}
                className="language-typescript line-numbers"
              >
                <code className="language-typescript">
                  <span className="token keyword">class</span>{" "}
                  <span className="token class-name">Bio</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}job<span className="token operator">:</span>{" "}
                  <span className="token builtin">string</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  {"  "}age<span className="token operator">:</span>{" "}
                  <span className="token builtin">number</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  {"  "}birthday<span className="token operator">:</span> Date
                  <span className="token punctuation">;</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                  {"\n"}
                  {"\n"}
                  <span className="token keyword">class</span>{" "}
                  <span className="token class-name">User</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}firstName<span className="token operator">:</span>{" "}
                  <span className="token builtin">string</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  {"  "}lastName<span className="token operator">:</span>{" "}
                  <span className="token builtin">string</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  {"  "}bio<span className="token operator">:</span> Bio
                  <span className="token punctuation">;</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                </code>
                <span
                  aria-hidden="true"
                  className="line-numbers-rows"
                  style={{ whiteSpace: "normal", width: "auto", left: 0 }}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </pre>
            </div>
            <p>
              and the correspond view models{" "}
              <code className="language-text">UserVm</code>:
            </p>
            <div
              className="gatsby-code-button-container"
              data-toaster-id={3615649315835645000}
              data-toaster-class="gatsby-code-button-toaster"
              data-toaster-text-class="gatsby-code-button-toaster-text"
              data-toaster-text="Copied to clipboard 📋"
              data-toaster-duration={3500}
              onclick="copyToClipboard(`class BioVm {
job: string;
isAdult: boolean;
birthday: string;
}

class UserVm {
first: string;
last: string;
full: string;
bio: BioVm;
}`, `3615649315835645000`)"
            >
              <div className="gatsby-code-button" data-tooltip>
                <svg
                  className="gatsby-code-button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" />
                </svg>
              </div>
            </div>
            <div className="gatsby-highlight" data-language="typescript">
              <pre
                style={{ counterReset: "linenumber NaN" }}
                className="language-typescript line-numbers"
              >
                <code className="language-typescript">
                  <span className="token keyword">class</span>{" "}
                  <span className="token class-name">BioVm</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}job<span className="token operator">:</span>{" "}
                  <span className="token builtin">string</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  {"  "}isAdult<span className="token operator">:</span>{" "}
                  <span className="token builtin">boolean</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  {"  "}birthday<span className="token operator">:</span>{" "}
                  <span className="token builtin">string</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                  {"\n"}
                  {"\n"}
                  <span className="token keyword">class</span>{" "}
                  <span className="token class-name">UserVm</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}first<span className="token operator">:</span>{" "}
                  <span className="token builtin">string</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  {"  "}last<span className="token operator">:</span>{" "}
                  <span className="token builtin">string</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  {"  "}full<span className="token operator">:</span>{" "}
                  <span className="token builtin">string</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  {"  "}bio<span className="token operator">:</span> BioVm
                  <span className="token punctuation">;</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                </code>
                <span
                  aria-hidden="true"
                  className="line-numbers-rows"
                  style={{ whiteSpace: "normal", width: "auto", left: 0 }}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </pre>
            </div>
            <p>along with the following configuration:</p>
            <div
              className="gatsby-code-button-container"
              data-toaster-id={80121318045349920000}
              data-toaster-class="gatsby-code-button-toaster"
              data-toaster-text-class="gatsby-code-button-toaster-text"
              data-toaster-text="Copied to clipboard 📋"
              data-toaster-duration={3500}
              onclick='copyToClipboard(`Mapper.createMap(User, UserVm)
.forMember(
(d) => d.first,
mapFrom((s) => s.firstName)
)
.forMember(
(d) => d.last,
mapFrom((s) => s.lastName)
)
.forMember(
(d) => d.full,
mapFrom((s) => s.firstName + " " + s.lastName)
);
Mapper.createMap(Bio, BioVm)
.forMember(
(d) => d.isAdult,
mapFrom((s) => s.age > 18)
)
.forMember(
(d) => d.birthday,
mapFrom((s) => s.birthday.toDateString())
);`, `80121318045349920000`)'
            >
              <div className="gatsby-code-button" data-tooltip>
                <svg
                  className="gatsby-code-button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" />
                </svg>
              </div>
            </div>
            <div className="gatsby-highlight" data-language="typescript">
              <pre
                style={{ counterReset: "linenumber NaN" }}
                className="language-typescript line-numbers"
              >
                <code className="language-typescript">
                  Mapper<span className="token punctuation">.</span>
                  <span className="token function">createMap</span>
                  <span className="token punctuation">(</span>User
                  <span className="token punctuation">,</span> UserVm
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>first
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"    "}
                  <span className="token function">mapFrom</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">s</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> s
                  <span className="token punctuation">.</span>firstName
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>last
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"    "}
                  <span className="token function">mapFrom</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">s</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> s
                  <span className="token punctuation">.</span>lastName
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>full
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"    "}
                  <span className="token function">mapFrom</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">s</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> s
                  <span className="token punctuation">.</span>firstName{" "}
                  <span className="token operator">+</span>{" "}
                  <span className="token string">" "</span>{" "}
                  <span className="token operator">+</span> s
                  <span className="token punctuation">.</span>lastName
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  {"\n"}Mapper<span className="token punctuation">.</span>
                  <span className="token function">createMap</span>
                  <span className="token punctuation">(</span>Bio
                  <span className="token punctuation">,</span> BioVm
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>isAdult
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"    "}
                  <span className="token function">mapFrom</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">s</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> s
                  <span className="token punctuation">.</span>age{" "}
                  <span className="token operator">&gt;</span>{" "}
                  <span className="token number">18</span>
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>birthday
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"    "}
                  <span className="token function">mapFrom</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">s</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> s
                  <span className="token punctuation">.</span>birthday
                  <span className="token punctuation">.</span>
                  <span className="token function">toDateString</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                </code>
                <span
                  aria-hidden="true"
                  className="line-numbers-rows"
                  style={{ whiteSpace: "normal", width: "auto", left: 0 }}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </pre>
            </div>
            <p>
              Executing <strong>map</strong> from{" "}
              <code className="language-text">User</code> to{" "}
              <code className="language-text">UserVm</code> with the above
              configuration for 1K, 10K, and 100K items yields the following
              result:
            </p>
            <table>
              <thead>
                <tr>
                  <th />
                  <th>1K items</th>
                  <th>10K items</th>
                  <th>100K items</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code className="language-text">@nartc/automapper</code> v5
                  </td>
                  <td>~9ms</td>
                  <td>~88ms</td>
                  <td>~959ms</td>
                </tr>
                <tr>
                  <td>
                    <code className="language-text">@nartc/automapper</code> v6
                  </td>
                  <td>~8ms</td>
                  <td>~81ms</td>
                  <td>~785ms</td>
                </tr>
              </tbody>
            </table>
            <blockquote>
              <p>
                Each benchmark was ran ~10~ 100 times for each category 1K, 10K,
                and 100K then the average was taken
              </p>
            </blockquote>
            <p>
              As you can see, <strong>AutoMapper</strong> v6 is slightly faster
              than v5, about 10-25% faster. And what really changed in v6?{" "}
              <strong>AutoMapper</strong> v6 does have some optimizations
              applied to it, as follow:
            </p>
            <ul>
              <li>
                Loops Optimization: v6 uses{" "}
                <code className="language-text">while</code> loops that{" "}
                <code className="language-text">for let</code> (the original{" "}
                <code className="language-text">for</code> loop with index
                variable) was used in important places like:{" "}
                <strong>map</strong> and{" "}
                <strong>initializing mapping properties</strong>. In areas where{" "}
                <code className="language-text">for let</code> is still used, v6
                has the property <code className="language-text">length</code>{" "}
                cached to avoid additional{" "}
                <code className="language-text">property lookup</code> for every
                iterations.
              </li>
              <li>
                Accessing Array Index: v6 moves a large part of the core’s data
                structures from <code className="language-text">Object</code> to{" "}
                <code className="language-text">Array</code> to also avoid{" "}
                <code className="language-text">property lookup</code>. About
                this technique, there are still areas in the code base where
                this can be applied further.
              </li>
            </ul>
            <blockquote>
              <p>
                You can learn more about <strong>Accessing Array Index</strong>{" "}
                from the talk{" "}
                <a
                  href="https://www.youtube.com/watch?v=EqSRpkMRyY4"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  How we make Angular fast
                </a>{" "}
                by Misko Hevery
              </p>
            </blockquote>
            <p>
              With the permission from{" "}
              <a
                href="https://twitter.com/YannRenaudin"
                target="_blank"
                rel="nofollow noreferrer"
              >
                Yann Renaudin
              </a>
              ,{" "}
              <a
                href="https://github.com/nobrainr/morphism"
                target="_blank"
                rel="nofollow noreferrer"
              >
                morphism
              </a>{" "}
              author, I would like to share{" "}
              <code className="language-text">morphism</code> benchmark with the
              same mapping configuration as above:
            </p>
            <div
              className="gatsby-code-button-container"
              data-toaster-id={7818797967584024000}
              data-toaster-class="gatsby-code-button-toaster"
              data-toaster-text-class="gatsby-code-button-toaster-text"
              data-toaster-text="Copied to clipboard 📋"
              data-toaster-duration={3500}
              onclick='copyToClipboard(`const morphismSchema = {
first: "firstName",
last: "lastName",
full: ({ firstName, lastName }) => firstName + " " + lastName,
bio: {
job: "bio.job",
isAdult: ({ bio }) => bio.age > 18,
birthday: ({ bio }) => bio.birthday.toDateString(),
},
};`, `7818797967584024000`)'
            >
              <div className="gatsby-code-button" data-tooltip>
                <svg
                  className="gatsby-code-button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" />
                </svg>
              </div>
            </div>
            <div className="gatsby-highlight" data-language="typescript">
              <pre
                style={{ counterReset: "linenumber NaN" }}
                className="language-typescript line-numbers"
              >
                <code className="language-typescript">
                  <span className="token keyword">const</span> morphismSchema{" "}
                  <span className="token operator">=</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}first<span className="token operator">:</span>{" "}
                  <span className="token string">"firstName"</span>
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}last<span className="token operator">:</span>{" "}
                  <span className="token string">"lastName"</span>
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}
                  <span className="token function-variable function">full</span>
                  <span className="token operator">:</span>{" "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">
                    <span className="token punctuation">{"{"}</span> firstName
                    <span className="token punctuation">,</span> lastName{" "}
                    <span className="token punctuation">{"}"}</span>
                  </span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> firstName{" "}
                  <span className="token operator">+</span>{" "}
                  <span className="token string">" "</span>{" "}
                  <span className="token operator">+</span> lastName
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}bio<span className="token operator">:</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"    "}job<span className="token operator">:</span>{" "}
                  <span className="token string">"bio.job"</span>
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"    "}
                  <span className="token function-variable function">
                    isAdult
                  </span>
                  <span className="token operator">:</span>{" "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">
                    <span className="token punctuation">{"{"}</span> bio{" "}
                    <span className="token punctuation">{"}"}</span>
                  </span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> bio
                  <span className="token punctuation">.</span>age{" "}
                  <span className="token operator">&gt;</span>{" "}
                  <span className="token number">18</span>
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"    "}
                  <span className="token function-variable function">
                    birthday
                  </span>
                  <span className="token operator">:</span>{" "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">
                    <span className="token punctuation">{"{"}</span> bio{" "}
                    <span className="token punctuation">{"}"}</span>
                  </span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> bio
                  <span className="token punctuation">.</span>birthday
                  <span className="token punctuation">.</span>
                  <span className="token function">toDateString</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">{"}"}</span>
                  <span className="token punctuation">,</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                  <span className="token punctuation">;</span>
                </code>
                <span
                  aria-hidden="true"
                  className="line-numbers-rows"
                  style={{ whiteSpace: "normal", width: "auto", left: 0 }}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </pre>
            </div>
            <blockquote>
              <p>
                Each benchmark was ran ~10~ 100 times for each category 1K, 10K,
                and 100K then the average was taken
              </p>
            </blockquote>
            <table>
              <thead>
                <tr>
                  <th />
                  <th>1K items</th>
                  <th>10K items</th>
                  <th>100K items</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code className="language-text">morphism</code>
                  </td>
                  <td>~15ms</td>
                  <td>~144ms</td>
                  <td>~1436ms</td>
                </tr>
                <tr>
                  <td>
                    <code className="language-text">morphism</code> with{" "}
                    <code className="language-text">create-mapper</code>
                  </td>
                  <td>~15ms</td>
                  <td>~145ms</td>
                  <td>~1464ms</td>
                </tr>
                <tr>
                  <td>
                    <code className="language-text">@nartc/automapper</code> v6
                  </td>
                  <td>~8ms</td>
                  <td>~81ms</td>
                  <td>~785ms</td>
                </tr>
              </tbody>
            </table>
            <p>
              This is just a simple comparison solely on the{" "}
              <strong>mapping</strong> part of the two libraries. Utility wise,{" "}
              <code className="language-text">morphism</code> is a fantastic
              library that supports mapping with{" "}
              <strong>schema configuration</strong> and this suits perfectly
              with <strong>Vanilla JavaScript</strong> projects, which do not
              have <code className="language-text">classes</code> to model the
              data in the projects. You can also store the{" "}
              <strong>schema configuration</strong> elsewhere (database, CDN)
              and reuse the <strong>schema configuration</strong> without having
              the schema inside of your source code. If you find{" "}
              <code className="language-text">morphism</code> interesting,
              please check it out at{" "}
              <a
                href="https://github.com/nobrainr/morphism"
                target="_blank"
                rel="nofollow noreferrer"
              >
                Github
              </a>
              . Thank you{" "}
              <a
                href="https://twitter.com/YannRenaudin"
                target="_blank"
                rel="nofollow noreferrer"
              >
                Yann
              </a>{" "}
              for allowing me to take{" "}
              <code className="language-text">morphism</code> to do a simple
              benchmark for <strong>AutoMapper</strong>.
            </p>
            <h2 id="small-bundle" style={{ position: "relative" }}>
              <a
                href="#small-bundle"
                aria-label="small bundle permalink"
                className="anchor before"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height={16}
                  version="1.1"
                  viewBox="0 0 16 16"
                  width={16}
                >
                  <path
                    fillRule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              Small Bundle
            </h2>
            <p>
              Overall, the bundle-size of v6 is sightly smaller than v5. All of
              the utility functions and some of the core parts were cleaned up
              pretty heavily.
              <span
                className="gatsby-resp-image-wrapper"
                style={{
                  position: "relative",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "431px",
                }}
              >
                <a
                  className="gatsby-resp-image-link"
                  href="/static/0954430092f37881645b1e54b07aecfc/369db/master.png"
                  style={{ display: "block" }}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="gatsby-resp-image-background-image"
                    style={{
                      paddingBottom: "56.875%",
                      position: "relative",
                      bottom: "0px",
                      left: "0px",
                      backgroundImage: 'url("data:image/png',
                      backgroundSize: "cover",
                      display: "block",
                      transition: "opacity 0.5s ease 0.5s",
                      opacity: 0,
                    }}
                  />
                  <img
                    className="gatsby-resp-image-image"
                    alt="master"
                    title="master"
                    src="/static/0954430092f37881645b1e54b07aecfc/369db/master.png"
                    srcSet="/static/0954430092f37881645b1e54b07aecfc/7b64c/master.png 160w,
/static/0954430092f37881645b1e54b07aecfc/4e610/master.png 320w,
/static/0954430092f37881645b1e54b07aecfc/369db/master.png 431w"
                    sizes="(max-width: 431px) 100vw, 431px"
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: "0px",
                      verticalAlign: "middle",
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      opacity: 1,
                      transition: "opacity 0.5s ease 0s",
                      color: "inherit",
                      boxShadow: "white 0px 0px 0px 400px inset",
                    }}
                    loading="lazy"
                  />
                </a>
              </span>
              <em>AutoMapper v5 bundle-size</em>
              <span
                className="gatsby-resp-image-wrapper"
                style={{
                  position: "relative",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "433px",
                }}
              >
                <a
                  className="gatsby-resp-image-link"
                  href="/static/b479a1493e757b87949f625d23c11a31/293b3/next.png"
                  style={{ display: "block" }}
                  target="_blank"
                  rel="noopener"
                >
                  <span
                    className="gatsby-resp-image-background-image"
                    style={{
                      paddingBottom: "53.125%",
                      position: "relative",
                      bottom: "0px",
                      left: "0px",
                      backgroundImage: 'url("data:image/png',
                      backgroundSize: "cover",
                      display: "block",
                      transition: "opacity 0.5s ease 0.5s",
                      opacity: 0,
                    }}
                  />
                  <img
                    className="gatsby-resp-image-image"
                    alt="next"
                    title="next"
                    src="/static/b479a1493e757b87949f625d23c11a31/293b3/next.png"
                    srcSet="/static/b479a1493e757b87949f625d23c11a31/7b64c/next.png 160w,
/static/b479a1493e757b87949f625d23c11a31/4e610/next.png 320w,
/static/b479a1493e757b87949f625d23c11a31/293b3/next.png 433w"
                    sizes="(max-width: 433px) 100vw, 433px"
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: "0px",
                      verticalAlign: "middle",
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      opacity: 1,
                      transition: "opacity 0.5s ease 0s",
                      color: "inherit",
                      boxShadow: "white 0px 0px 0px 400px inset",
                    }}
                    loading="lazy"
                  />
                </a>
              </span>
              <em>AutoMapper v6 bundle-size</em>
            </p>
            <blockquote>
              <p>
                Bundle-size is provided by{" "}
                <a
                  href="https://bundlephobia.com"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  Bundlephobia
                </a>
              </p>
            </blockquote>
            <p>
              On other note, let’s take another look at the above{" "}
              <strong>mapping configuration</strong> with the difference between
              v5 and v6:
            </p>
            <div
              className="gatsby-code-button-container"
              data-toaster-id={40288759992084324000}
              data-toaster-class="gatsby-code-button-toaster"
              data-toaster-text-class="gatsby-code-button-toaster-text"
              data-toaster-text="Copied to clipboard 📋"
              data-toaster-duration={3500}
              onclick='copyToClipboard(`// v5
Mapper.createMap(User, UserVm)
.forMember(
(d) => d.first,
(opts) => opts.mapFrom((s) => s.firstName)
)
.forMember(
(d) => d.last,
(opts) => opts.mapFrom((s) => s.lastName)
)
.forMember(
(d) => d.full,
(opts) => opts.mapFrom((s) => s.firstName + " " + s.lastName)
);

// v6
Mapper.createMap(User, UserVm)
.forMember(
(d) => d.first,
mapFrom((s) => s.firstName)
)
.forMember(
(d) => d.last,
mapFrom((s) => s.lastName)
)
.forMember(
(d) => d.full,
mapFrom((s) => s.firstName + " " + s.lastName)
);`, `40288759992084324000`)'
            >
              <div className="gatsby-code-button" data-tooltip>
                <svg
                  className="gatsby-code-button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" />
                </svg>
              </div>
            </div>
            <div className="gatsby-highlight" data-language="typescript">
              <pre
                style={{ counterReset: "linenumber NaN" }}
                className="language-typescript line-numbers"
              >
                <code className="language-typescript">
                  <span className="token comment">// v5</span>
                  {"\n"}Mapper<span className="token punctuation">.</span>
                  <span className="token function">createMap</span>
                  <span className="token punctuation">(</span>User
                  <span className="token punctuation">,</span> UserVm
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>first
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">opts</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> opts
                  <span className="token punctuation">.</span>
                  <span className="token function">mapFrom</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">s</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> s
                  <span className="token punctuation">.</span>firstName
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>last
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">opts</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> opts
                  <span className="token punctuation">.</span>
                  <span className="token function">mapFrom</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">s</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> s
                  <span className="token punctuation">.</span>lastName
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>full
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">opts</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> opts
                  <span className="token punctuation">.</span>
                  <span className="token function">mapFrom</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">s</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> s
                  <span className="token punctuation">.</span>firstName{" "}
                  <span className="token operator">+</span>{" "}
                  <span className="token string">" "</span>{" "}
                  <span className="token operator">+</span> s
                  <span className="token punctuation">.</span>lastName
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  {"\n"}
                  <span className="token comment">// v6</span>
                  {"\n"}Mapper<span className="token punctuation">.</span>
                  <span className="token function">createMap</span>
                  <span className="token punctuation">(</span>User
                  <span className="token punctuation">,</span> UserVm
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>first
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"    "}
                  <span className="token function">mapFrom</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">s</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> s
                  <span className="token punctuation">.</span>firstName
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>last
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"    "}
                  <span className="token function">mapFrom</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">s</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> s
                  <span className="token punctuation">.</span>lastName
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>full
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"    "}
                  <span className="token function">mapFrom</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">s</span>
                  <span className="token punctuation">)</span>{" "}
                  <span className="token operator">=&gt;</span> s
                  <span className="token punctuation">.</span>firstName{" "}
                  <span className="token operator">+</span>{" "}
                  <span className="token string">" "</span>{" "}
                  <span className="token operator">+</span> s
                  <span className="token punctuation">.</span>lastName
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"  "}
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                </code>
                <span
                  aria-hidden="true"
                  className="line-numbers-rows"
                  style={{ whiteSpace: "normal", width: "auto", left: 0 }}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </pre>
            </div>
            <p>
              Did you spot the difference? In v6, the second parameter of{" "}
              <code className="language-text">forMember()</code> is{" "}
              <strong>no longer</strong>{" "}
              <code className="language-text">ForMemberOptions</code>.{" "}
              <code className="language-text">ForMemberOptions</code> is an
              interface that contains all <strong>mapping operations</strong>{" "}
              like:
              <code className="language-text">mapFrom()</code>,{" "}
              <code className="language-text">mapWith()</code>,{" "}
              <code className="language-text">ignore()</code>,{" "}
              <code className="language-text">condition()</code>,{" "}
              <code className="language-text">fromValue()</code>, and some
              others. In v6, these <strong>mapping operations</strong> are
              separated into their own{" "}
              <code className="language-text">Pure Functions</code>. This allows
              for <code className="language-text">tree-shaking</code> tools to
              do their job.
            </p>
            <blockquote>
              <p>
                <code className="language-text">tree-shaking</code> is a step
                during Build/Bundle. It means to eliminating dead-code (unused
                code). Dead code, like{" "}
                <code className="language-text">Functions</code> that are
                declared but are not used, will be removed from the final bundle
                which results in a much smaller bundle-size. Only pay for what
                you use kind of thing.
              </p>
            </blockquote>
            <h2 id="critical-bug" style={{ position: "relative" }}>
              <a
                href="#critical-bug"
                aria-label="critical bug permalink"
                className="anchor before"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height={16}
                  version="1.1"
                  viewBox="0 0 16 16"
                  width={16}
                >
                  <path
                    fillRule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              Critical Bug
            </h2>
            <p>
              In the previous versions of <strong>AutoMapper</strong>, all of
              the <strong>Mappings</strong> and <strong>Profiles</strong> were
              stored in a form of <code className="language-text">Object</code>{" "}
              (or <code className="language-text">Dictionary</code>) with their{" "}
              <code className="language-text">prototype.name</code> as{" "}
              <code className="language-text">key</code>. And whatever comes
              will come, these
              <code className="language-text">Object</code> uses{" "}
              <code className="language-text">prototype.name</code> as their{" "}
              <code className="language-text">keys</code> so when a consumer
              uses the library in Production environment, plugins like{" "}
              <code className="language-text">Uglify</code> or{" "}
              <code className="language-text">Terser</code> will minify the
              source code, resulting in these <strong>Mapping</strong> and{" "}
              <strong>Profile</strong>
              class name are also “uglified” which ultimately leads to duplicate{" "}
              <code className="language-text">keys</code> forcing{" "}
              <strong>AutoMapper</strong> to throw exceptions left and right.
            </p>
            <p>
              v6 changes how it stores these classes with the use of some
              Singleton <strong>Storages</strong>. These singletons use{" "}
              <code className="language-text">WeakMap</code> to store the
              classes themselves as <code className="language-text">key</code>{" "}
              instead of using{" "}
              <code className="language-text">prototype.name</code>. This
              guarantees the uniqueness of the{" "}
              <code className="language-text">keys</code> even after the
              minification process.
            </p>
            <div
              className="gatsby-code-button-container"
              data-toaster-id={55133853605173330000}
              data-toaster-class="gatsby-code-button-toaster"
              data-toaster-text-class="gatsby-code-button-toaster-text"
              data-toaster-text="Copied to clipboard 📋"
              data-toaster-duration={3500}
              onclick="copyToClipboard(`// To demonstrate my point about prototype.name
class Foo {}

console.log(Foo.name); // logs Foo
console.log(Foo.prototype.constructor.name); // logs Foo`, `55133853605173330000`)"
            >
              <div className="gatsby-code-button" data-tooltip>
                <svg
                  className="gatsby-code-button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" />
                </svg>
              </div>
            </div>
            <div className="gatsby-highlight" data-language="typescript">
              <pre
                style={{ counterReset: "linenumber NaN" }}
                className="language-typescript line-numbers"
              >
                <code className="language-typescript">
                  <span className="token comment">
                    // To demonstrate my point about prototype.name
                  </span>
                  {"\n"}
                  <span className="token keyword">class</span>{" "}
                  <span className="token class-name">Foo</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  <span className="token punctuation">{"}"}</span>
                  {"\n"}
                  {"\n"}
                  <span className="token builtin">console</span>
                  <span className="token punctuation">.</span>
                  <span className="token function">log</span>
                  <span className="token punctuation">(</span>Foo
                  <span className="token punctuation">.</span>name
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>{" "}
                  <span className="token comment">// logs Foo</span>
                  {"\n"}
                  <span className="token builtin">console</span>
                  <span className="token punctuation">.</span>
                  <span className="token function">log</span>
                  <span className="token punctuation">(</span>
                  <span className="token class-name">Foo</span>
                  <span className="token punctuation">.</span>prototype
                  <span className="token punctuation">.</span>
                  <span className="token keyword">constructor</span>
                  <span className="token punctuation">.</span>name
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>{" "}
                  <span className="token comment">// logs Foo</span>
                </code>
                <span
                  aria-hidden="true"
                  className="line-numbers-rows"
                  style={{ whiteSpace: "normal", width: "auto", left: 0 }}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </pre>
            </div>
            <h2 id="javascript-support" style={{ position: "relative" }}>
              <a
                href="#javascript-support"
                aria-label="javascript support permalink"
                className="anchor before"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height={16}
                  version="1.1"
                  viewBox="0 0 16 16"
                  width={16}
                >
                  <path
                    fillRule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              JavaScript Support
            </h2>
            <p>
              Before v6, support for <strong>JavaScript</strong> is essentially
              non-existent. <strong>AutoMapper</strong> has been working only
              with <strong>TypeScript</strong> projects. From v6, this will
              change as <strong>AutoMapper</strong> will provide a new API to
              work with <strong>JavaScript</strong>. Before introducing this
              API, I would like to skim through how <strong>AutoMapper</strong>{" "}
              works so you guys can understand how it has only been supporting{" "}
              <strong>TypeScript</strong>
            </p>
            <p>
              <strong>AutoMapper</strong> works on the concept of{" "}
              <strong>Metadata</strong> (data about data) of the Models. For
              example, the above <code className="language-text">User</code>{" "}
              model has the following information:{" "}
              <code className="language-text">firstName</code> is a{" "}
              <code className="language-text">string</code>,{" "}
              <code className="language-text">lastName</code> is a string, and{" "}
              <code className="language-text">bio</code> is a{" "}
              <code className="language-text">Bio</code>. These are so-called{" "}
              <strong>Metadata</strong>. To get a hold of these information at
              runtime, <strong>AutoMapper</strong> uses a decorator{" "}
              <code className="language-text">@AutoMap()</code>. Afterwards,{" "}
              <code className="language-text">MetadataStorage</code> will step
              in and store these metadata, that{" "}
              <code className="language-text">@AutoMap()</code> provides, for
              each unique Model. In <strong>Vanilla JavaScript</strong>{" "}
              projects, it is quite complicated to setup your project to use{" "}
              <code className="language-text">decorators</code>, and{" "}
              <strong>AutoMapper</strong> itself did not have any API to support{" "}
              <strong>JavaScript</strong>.
            </p>
            <p>
              The API that v6 will provide is:{" "}
              <code className="language-text">createMapMetadata()</code>. This
              API will simulate how{" "}
              <code className="language-text">@AutoMap()</code> works so
              metadata can be stored. However, this early-versioned API will
              still require the consumers to provide some amount of boiler-plate
              code
            </p>
            <div
              className="gatsby-code-button-container"
              data-toaster-id={52497728617914480000}
              data-toaster-class="gatsby-code-button-toaster"
              data-toaster-text-class="gatsby-code-button-toaster-text"
              data-toaster-text="Copied to clipboard 📋"
              data-toaster-duration={3500}
              onclick="copyToClipboard(`class User {}
class UserVm {}

class Bio {}
class BioVm {}`, `52497728617914480000`)"
            >
              <div className="gatsby-code-button" data-tooltip>
                <svg
                  className="gatsby-code-button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" />
                </svg>
              </div>
            </div>
            <div className="gatsby-highlight" data-language="javascript">
              <pre
                style={{ counterReset: "linenumber NaN" }}
                className="language-javascript line-numbers"
              >
                <code className="language-javascript">
                  <span className="token keyword">class</span>{" "}
                  <span className="token class-name">User</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  <span className="token punctuation">{"}"}</span>
                  {"\n"}
                  <span className="token keyword">class</span>{" "}
                  <span className="token class-name">UserVm</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  <span className="token punctuation">{"}"}</span>
                  {"\n"}
                  {"\n"}
                  <span className="token keyword">class</span>{" "}
                  <span className="token class-name">Bio</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  <span className="token punctuation">{"}"}</span>
                  {"\n"}
                  <span className="token keyword">class</span>{" "}
                  <span className="token class-name">BioVm</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  <span className="token punctuation">{"}"}</span>
                </code>
                <span
                  aria-hidden="true"
                  className="line-numbers-rows"
                  style={{ whiteSpace: "normal", width: "auto", left: 0 }}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </pre>
            </div>
            <p>
              <strong>JavaScript</strong> does not have Type Declaration so{" "}
              <code className="language-text">fields</code> do not have to be
              declared. But these empty classes are required to ensure the
              uniqueness of the Models.
            </p>
            <div
              className="gatsby-code-button-container"
              data-toaster-id={94321621809761830000}
              data-toaster-class="gatsby-code-button-toaster"
              data-toaster-text-class="gatsby-code-button-toaster-text"
              data-toaster-text="Copied to clipboard 📋"
              data-toaster-duration={3500}
              onclick="copyToClipboard(`createMapMetadata(Bio, {
job: String,
age: Number,
birthday: Date,
});
createMapMetadata(User, {
firstName: String,
lastName: String,
bio: Bio,
});
createMapMetadata(BioVm, {
job: String,
isAdult: Boolean,
birthday: String,
});
createMapMetadata(UserVm, {
first: String,
last: String,
full: String,
bio: BioVm,
});`, `94321621809761830000`)"
            >
              <div className="gatsby-code-button" data-tooltip>
                <svg
                  className="gatsby-code-button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" />
                </svg>
              </div>
            </div>
            <div className="gatsby-highlight" data-language="javascript">
              <pre
                style={{ counterReset: "linenumber NaN" }}
                className="language-javascript line-numbers"
              >
                <code className="language-javascript">
                  <span className="token function">createMapMetadata</span>
                  <span className="token punctuation">(</span>Bio
                  <span className="token punctuation">,</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}job<span className="token operator">:</span> String
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}age<span className="token operator">:</span> Number
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}birthday<span className="token operator">:</span> Date
                  <span className="token punctuation">,</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  <span className="token function">createMapMetadata</span>
                  <span className="token punctuation">(</span>User
                  <span className="token punctuation">,</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}firstName<span className="token operator">:</span>{" "}
                  String<span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}lastName<span className="token operator">:</span> String
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}bio<span className="token operator">:</span> Bio
                  <span className="token punctuation">,</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  <span className="token function">createMapMetadata</span>
                  <span className="token punctuation">(</span>BioVm
                  <span className="token punctuation">,</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}job<span className="token operator">:</span> String
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}isAdult<span className="token operator">:</span> Boolean
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}birthday<span className="token operator">:</span> String
                  <span className="token punctuation">,</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  <span className="token function">createMapMetadata</span>
                  <span className="token punctuation">(</span>UserVm
                  <span className="token punctuation">,</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}first<span className="token operator">:</span> String
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}last<span className="token operator">:</span> String
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}full<span className="token operator">:</span> String
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}bio<span className="token operator">:</span> BioVm
                  <span className="token punctuation">,</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                </code>
                <span
                  aria-hidden="true"
                  className="line-numbers-rows"
                  style={{ whiteSpace: "normal", width: "auto", left: 0 }}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </pre>
            </div>
            <p>
              Too boiler-platey right? Well, consumers do not have to provide
              information for each and every fields like above. Only fields that{" "}
              <strong>ARE NOT</strong> configured manually by{" "}
              <code className="language-text">.forMember()</code> are required
              to be provided. So with the configuration in the beginning of the
              blog, <code className="language-text">isAdult</code> and{" "}
              <code className="language-text">birthday</code> from{" "}
              <code className="language-text">BioVm</code> do not have to be
              provided in{" "}
              <code className="language-text">createMapMetadata</code>.
              Likewise, <code className="language-text">first</code>,{" "}
              <code className="language-text">last</code>, and{" "}
              <code className="language-text">full</code> do not have to be
              provided for <code className="language-text">UserVm</code>.
            </p>
            <div
              className="gatsby-code-button-container"
              data-toaster-id={28871230866171650000}
              data-toaster-class="gatsby-code-button-toaster"
              data-toaster-text-class="gatsby-code-button-toaster-text"
              data-toaster-text="Copied to clipboard 📋"
              data-toaster-duration={3500}
              onclick="copyToClipboard(`createMapMetadata(Bio, {
job: String,
age: Number,
birthday: Date,
});
createMapMetadata(User, {
firstName: String,
lastName: String,
bio: Bio,
});

createMapMetadata(BioVm, {
job: String,
});
createMapMetadata(UserVm, {
bio: BioVm,
});`, `28871230866171650000`)"
            >
              <div className="gatsby-code-button" data-tooltip>
                <svg
                  className="gatsby-code-button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" />
                </svg>
              </div>
            </div>
            <div className="gatsby-highlight" data-language="javascript">
              <pre
                style={{ counterReset: "linenumber NaN" }}
                className="language-javascript line-numbers"
              >
                <code className="language-javascript">
                  <span className="token function">createMapMetadata</span>
                  <span className="token punctuation">(</span>Bio
                  <span className="token punctuation">,</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}job<span className="token operator">:</span> String
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}age<span className="token operator">:</span> Number
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}birthday<span className="token operator">:</span> Date
                  <span className="token punctuation">,</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  <span className="token function">createMapMetadata</span>
                  <span className="token punctuation">(</span>User
                  <span className="token punctuation">,</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}firstName<span className="token operator">:</span>{" "}
                  String<span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}lastName<span className="token operator">:</span> String
                  <span className="token punctuation">,</span>
                  {"\n"}
                  {"  "}bio<span className="token operator">:</span> Bio
                  <span className="token punctuation">,</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  {"\n"}
                  <span className="token function">createMapMetadata</span>
                  <span className="token punctuation">(</span>BioVm
                  <span className="token punctuation">,</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}job<span className="token operator">:</span> String
                  <span className="token punctuation">,</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  <span className="token function">createMapMetadata</span>
                  <span className="token punctuation">(</span>UserVm
                  <span className="token punctuation">,</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}bio<span className="token operator">:</span> BioVm
                  <span className="token punctuation">,</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                </code>
                <span
                  aria-hidden="true"
                  className="line-numbers-rows"
                  style={{ whiteSpace: "normal", width: "auto", left: 0 }}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </pre>
            </div>
            <p>
              The similar is applied for when consumers configure reverse
              mapping for{" "}
              <code className="language-text">UserVm -&gt; User</code> (or{" "}
              <code className="language-text">BioVm -&gt; Bio</code>). Fields
              that <strong>ARE</strong> configured manually by{" "}
              <code className="language-text">.forPath()</code> (if{" "}
              <code className="language-text">reverseMap()</code> is used)
              and/or <code className="language-text">.forMember()</code>
              are not required to be provided in{" "}
              <code className="language-text">createMapMetadata</code>.
            </p>
            <h2 id="can-i-try" style={{ position: "relative" }}>
              <a
                href="#can-i-try"
                aria-label="can i try permalink"
                className="anchor before"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height={16}
                  version="1.1"
                  viewBox="0 0 16 16"
                  width={16}
                >
                  <path
                    fillRule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              Can I try?
            </h2>
            <p>
              You can try out <strong>AutoMapper</strong> v6 by installing the
              next version of the library
            </p>
            <div className="gatsby-highlight" data-language="text">
              <pre
                style={{ counterReset: "linenumber NaN" }}
                className="language-text line-numbers"
              >
                <code className="language-text">
                  npm i @nartc/automapper@next
                </code>
                <span
                  aria-hidden="true"
                  className="line-numbers-rows"
                  style={{ whiteSpace: "normal", width: "auto", left: 0 }}
                >
                  <span />
                </span>
              </pre>
            </div>
            <h2 id="migrate-from-v5" style={{ position: "relative" }}>
              <a
                href="#migrate-from-v5"
                aria-label="migrate from v5 permalink"
                className="anchor before"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height={16}
                  version="1.1"
                  viewBox="0 0 16 16"
                  width={16}
                >
                  <path
                    fillRule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              Migrate from v5
            </h2>
            <ul>
              <li>
                Like mentioned above, the <strong>mapping operations</strong>{" "}
                are separate functions in v6. So you configuration needs to be
                changed:
              </li>
            </ul>
            <div
              className="gatsby-code-button-container"
              data-toaster-id={84330171426046690000}
              data-toaster-class="gatsby-code-button-toaster"
              data-toaster-text-class="gatsby-code-button-toaster-text"
              data-toaster-text="Copied to clipboard 📋"
              data-toaster-duration={3500}
              onclick="copyToClipboard(`// before
Mapper.createMap(User, UserVm)
.forMember(d => d.full, opts => opts.mapFrom(s => s.first + ' ' + s.last)
.forMember(d => d.foo, opts => opts.ignore());

// after
Mapper.createMap(User, UserVm)
.forMember(d => d.full, mapFrom(s => s.first + ' ' + s.last)
.forMember(d => d.foo, ignore())`, `84330171426046690000`)"
            >
              <div className="gatsby-code-button" data-tooltip>
                <svg
                  className="gatsby-code-button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" />
                </svg>
              </div>
            </div>
            <div className="gatsby-highlight" data-language="typescript">
              <pre
                style={{ counterReset: "linenumber NaN" }}
                className="language-typescript line-numbers"
              >
                <code className="language-typescript">
                  <span className="token comment">// before</span>
                  {"\n"}Mapper<span className="token punctuation">.</span>
                  <span className="token function">createMap</span>
                  <span className="token punctuation">(</span>User
                  <span className="token punctuation">,</span> UserVm
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>full
                  <span className="token punctuation">,</span>{" "}
                  <span className="token parameter">opts</span>{" "}
                  <span className="token operator">=&gt;</span> opts
                  <span className="token punctuation">.</span>
                  <span className="token function">mapFrom</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">s</span>{" "}
                  <span className="token operator">=&gt;</span> s
                  <span className="token punctuation">.</span>first{" "}
                  <span className="token operator">+</span>{" "}
                  <span className="token string">' '</span>{" "}
                  <span className="token operator">+</span> s
                  <span className="token punctuation">.</span>last
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>foo
                  <span className="token punctuation">,</span>{" "}
                  <span className="token parameter">opts</span>{" "}
                  <span className="token operator">=&gt;</span> opts
                  <span className="token punctuation">.</span>
                  <span className="token function">ignore</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  {"\n"}
                  <span className="token comment">// after</span>
                  {"\n"}Mapper<span className="token punctuation">.</span>
                  <span className="token function">createMap</span>
                  <span className="token punctuation">(</span>User
                  <span className="token punctuation">,</span> UserVm
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>full
                  <span className="token punctuation">,</span>{" "}
                  <span className="token function">mapFrom</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">s</span>{" "}
                  <span className="token operator">=&gt;</span> s
                  <span className="token punctuation">.</span>first{" "}
                  <span className="token operator">+</span>{" "}
                  <span className="token string">' '</span>{" "}
                  <span className="token operator">+</span> s
                  <span className="token punctuation">.</span>last
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"    "}
                  <span className="token punctuation">.</span>
                  <span className="token function">forMember</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">d</span>{" "}
                  <span className="token operator">=&gt;</span> d
                  <span className="token punctuation">.</span>foo
                  <span className="token punctuation">,</span>{" "}
                  <span className="token function">ignore</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">)</span>
                </code>
                <span
                  aria-hidden="true"
                  className="line-numbers-rows"
                  style={{ whiteSpace: "normal", width: "auto", left: 0 }}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </pre>
            </div>
            <ul>
              <li>
                <code className="language-text">Mapper.initialize()</code> has
                been deprecated. Please use{" "}
                <code className="language-text">Mapper.createMap()</code>,{" "}
                <code className="language-text">Mapper.addProfile()</code>, and{" "}
                <code className="language-text">
                  Mapper.withGlobalSettings()
                </code>{" "}
                directly.
              </li>
              <li>
                All functions that receive{" "}
                <code className="language-text">Profile</code> and{" "}
                <code className="language-text">NamingConvention</code> as
                arguments are now expecting the{" "}
                <code className="language-text">Class</code> instead of the
                instance.
              </li>
            </ul>
            <div
              className="gatsby-code-button-container"
              data-toaster-id={40827153674660920000}
              data-toaster-class="gatsby-code-button-toaster"
              data-toaster-text-class="gatsby-code-button-toaster-text"
              data-toaster-text="Copied to clipboard 📋"
              data-toaster-duration={3500}
              onclick="copyToClipboard(`// before
Mapper.createMap(User, UserVm, {
sourceMemberNamingConvention: new PascalCaseNamingConvention(),
});

// after
Mapper.createMap(User, UserVm, {
sourceMemberNamingConvention: PascalCaseNamingConvention,
});`, `40827153674660920000`)"
            >
              <div className="gatsby-code-button" data-tooltip>
                <svg
                  className="gatsby-code-button-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z" />
                </svg>
              </div>
            </div>
            <div className="gatsby-highlight" data-language="typescript">
              <pre
                style={{ counterReset: "linenumber NaN" }}
                className="language-typescript line-numbers"
              >
                <code className="language-typescript">
                  <span className="token comment">// before</span>
                  {"\n"}Mapper<span className="token punctuation">.</span>
                  <span className="token function">createMap</span>
                  <span className="token punctuation">(</span>User
                  <span className="token punctuation">,</span> UserVm
                  <span className="token punctuation">,</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}sourceMemberNamingConvention
                  <span className="token operator">:</span>{" "}
                  <span className="token keyword">new</span>{" "}
                  <span className="token class-name">
                    PascalCaseNamingConvention
                  </span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">,</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                  {"\n"}
                  {"\n"}
                  <span className="token comment">// after</span>
                  {"\n"}Mapper<span className="token punctuation">.</span>
                  <span className="token function">createMap</span>
                  <span className="token punctuation">(</span>User
                  <span className="token punctuation">,</span> UserVm
                  <span className="token punctuation">,</span>{" "}
                  <span className="token punctuation">{"{"}</span>
                  {"\n"}
                  {"  "}sourceMemberNamingConvention
                  <span className="token operator">:</span>{" "}
                  PascalCaseNamingConvention
                  <span className="token punctuation">,</span>
                  {"\n"}
                  <span className="token punctuation">{"}"}</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">;</span>
                </code>
                <span
                  aria-hidden="true"
                  className="line-numbers-rows"
                  style={{ whiteSpace: "normal", width: "auto", left: 0 }}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </pre>
            </div>
            <p>
              You can learn more from the{" "}
              <a
                href="https://automapper.netlify.com/docs/next/introduction/why"
                target="_blank"
                rel="nofollow noreferrer"
              >
                documentation
              </a>{" "}
              for the next version.
            </p>
            <h2 id="conclusion" style={{ position: "relative" }}>
              <a
                href="#conclusion"
                aria-label="conclusion permalink"
                className="anchor before"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height={16}
                  version="1.1"
                  viewBox="0 0 16 16"
                  width={16}
                >
                  <path
                    fillRule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  />
                </svg>
              </a>
              Conclusion
            </h2>
            <p>
              Again, I am very excited to share these changes with you in{" "}
              <strong>AutoMapper</strong> v6. Same as my previous blog posts
              about <strong>AutoMapper</strong>, I hope people will give{" "}
              <strong>AutoMapper</strong> a try should the library fits their
              use-cases. Thank you for reading and I will see you in the next
              one. 👋
            </p>
          </div>
        </div>
      </div>

      
      <hr className="MuiDivider-root" />
      <div
        className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-space-between"
        style={{ marginBottom: "24px", marginTop: "8px" }}
      />
      <a
        className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8px",
          marginBottom: "8px",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <h6 className="MuiTypography-root MuiTypography-h6">
          <span role="img" aria-label="up to top">
            ⏫⏫⏫⏫
          </span>
        </h6>
      </a>
      <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4 MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
        <div className="MuiGrid-root MuiGrid-item">
          <a
            className="MuiButtonBase-root MuiIconButton-root"
            tabIndex={0}
            aria-disabled="false"
            href="https://www.facebook.com/ctran2428"
            target="_blank"
            rel="noreferrer"
          >
            <span className="MuiIconButton-label">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
            </span>
            <span className="MuiTouchRipple-root" />
          </a>
        </div>
        <div className="MuiGrid-root MuiGrid-item">
          <a
            className="MuiButtonBase-root MuiIconButton-root"
            tabIndex={0}
            aria-disabled="false"
            href="https://twitter.com/Nartc1410"
            target="_blank"
            rel="noreferrer"
          >
            <span className="MuiIconButton-label">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
              </svg>
            </span>
            <span className="MuiTouchRipple-root" />
          </a>
        </div>
        <div className="MuiGrid-root MuiGrid-item">
          <a
            className="MuiButtonBase-root MuiIconButton-root"
            tabIndex={0}
            aria-disabled="false"
            href="https://github.com/nartc"
            target="_blank"
            rel="noreferrer"
          >
            <span className="MuiIconButton-label">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </span>
            <span className="MuiTouchRipple-root" />
          </a>
        </div>
        <div className="MuiGrid-root MuiGrid-item">
          <a
            className="MuiButtonBase-root MuiIconButton-root"
            tabIndex={0}
            aria-disabled="false"
            href="https://www.linkedin.com/in/chauntran/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="MuiIconButton-label">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
            </span>
            <span className="MuiTouchRipple-root" />
          </a>
        </div>
        <div className="MuiGrid-root MuiGrid-item">
          <a
            className="MuiButtonBase-root MuiIconButton-root"
            tabIndex={0}
            aria-disabled="false"
            href="/rss.xml"
            target="_blank"
            rel="noreferrer"
          >
            <span className="MuiIconButton-label">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6.18,15.64A2.18,2.18 0 0,1 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82A2.18,2.18 0 0,1 6.18,15.64M4,4.44A15.56,15.56 0 0,1 19.56,20H16.73A12.73,12.73 0 0,0 4,7.27V4.44M4,10.1A9.9,9.9 0 0,1 13.9,20H11.07A7.07,7.07 0 0,0 4,12.93V10.1Z" />
              </svg>
            </span>
            <span className="MuiTouchRipple-root" />
          </a>
        </div>
      </div>
      <div
        className="MuiContainer-root MuiContainer-maxWidthLg"
        style={{ textAlign: "center" }}
      >
        <button
          className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"
          tabIndex={0}
          type="button"
        >
          <span className="MuiButton-label">Deactivate Google Analytics</span>
          <span className="MuiTouchRipple-root" />
        </button>
      </div>
      <p
        className="MuiTypography-root MuiTypography-body1 MuiTypography-alignCenter"
        style={{ paddingBottom: "16px" }}
      >
        <strong>Written by</strong> Group B
      </p>
    </div>
  );
}
export default HeadContent;
