import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./App-BOCROeKv.js";import{t as r}from"./Toaster-iUbVR2_Y.js";import{t as i}from"./Button-D2Gd0djy.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{a as o,c as s,m as c,r as l,s as u,u as d}from"./Sheets-DkzTz-by.js";import{t as f,zt as p}from"./src-Ca_r4w3v.js";function m(){let e=d();return(0,g.jsx)(i,{onClick:()=>e.open({kind:`lock`}),children:`Open the lock sheet`})}function h({s:e}){return(0,g.jsx)(r,{children:(0,g.jsxs)(u,{initial:{moment:`morning`,snapshot:e},children:[(0,g.jsx)(m,{}),(0,g.jsx)(n,{})]})})}var g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{c(),f(),t(),s(),o(),g=a(),{expect:_,fireEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`App/Frame`,parameters:{layout:`fullscreen`}},S=e=>async()=>{for(let e of p)localStorage.removeItem(`barnito-mock:catch-up:${e.id}`);return localStorage.setItem(`barnito-mock:catch-up:morning`,JSON.stringify({ask:!0,seenAt:Date.parse(`2028-06-14T22:30:00Z`)})),window.location.hash=e,l(),{s:await p.find(e=>e.id===`morning`).load()}},C=()=>b(document.body),w={loaders:[S(`#/match/C-4`)],render:(e,{loaded:t})=>(0,g.jsx)(h,{s:t.s}),play:async()=>{await _(await C().findByRole(`link`,{name:`Back to Matches`})).toHaveAttribute(`href`,`#/matches`),window.location.hash=`#/team/DE`,await _(await C().findByRole(`link`,{name:`Back to Germany v Poland`})).toHaveAttribute(`href`,`#/match/C-4`),window.location.hash=`#/match/C-4`,await _(await C().findByRole(`link`,{name:`Back to Matches`})).toBeVisible(),window.location.hash=`#/table/history`,await _(await C().findByRole(`link`,{name:`Back to Germany v Poland`})).toBeVisible(),window.location.hash=`#/table`,await y(()=>_(C().queryByRole(`link`,{name:/^Back to/})).toBeNull())}},T={loaders:[S(`#/picks`)],render:(e,{loaded:t})=>(0,g.jsx)(h,{s:t.s}),play:async()=>{await v.click(await C().findByRole(`button`,{name:`Open the lock sheet`})),await y(()=>_(document.querySelector(`[role=dialog]`)).not.toBeNull()),window.location.hash=`#/table`,await y(()=>_(document.querySelector(`[role=dialog]`)).toBeNull())}},E={loaders:[S(`#/table/history/2028-06-14`)],render:(e,{loaded:t})=>(0,g.jsx)(h,{s:t.s}),play:async()=>{let e=await C().findByRole(`link`,{name:`Back to History`});window.location.hash=e.getAttribute(`href`).slice(1),await _(await C().findByRole(`link`,{name:`Back to Table`})).toBeVisible()}},D=[`Back`,`RouteClosesSheet`,`DeepDay`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  loaders: [at("#/match/C-4")],
  render: (_, {
    loaded
  }) => <Frame s={(loaded as {
    s: Snapshot;
  }).s} />,
  play: async () => {
    await expect(await page().findByRole("link", {
      name: "Back to Matches"
    })).toHaveAttribute("href", "#/matches");
    window.location.hash = "#/team/DE";
    await expect(await page().findByRole("link", {
      name: "Back to Germany v Poland"
    })).toHaveAttribute("href", "#/match/C-4");
    // Going back takes the team off the way back: the match's Back is Matches again.
    window.location.hash = "#/match/C-4";
    await expect(await page().findByRole("link", {
      name: "Back to Matches"
    })).toBeVisible();
    window.location.hash = "#/table/history";
    await expect(await page().findByRole("link", {
      name: "Back to Germany v Poland"
    })).toBeVisible();
    window.location.hash = "#/table";
    await waitFor(() => expect(page().queryByRole("link", {
      name: /^Back to/
    })).toBeNull());
  }
}`,...w.parameters?.docs?.source},description:{story:`Back (Review Focus 5): landed on directly, a screen goes back to its parent; after a tap, to where you came from.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  loaders: [at("#/picks")],
  render: (_, {
    loaded
  }) => <Frame s={(loaded as {
    s: Snapshot;
  }).s} />,
  play: async () => {
    await fireEvent.click(await page().findByRole("button", {
      name: "Open the lock sheet"
    }));
    await waitFor(() => expect(document.querySelector("[role=dialog]")).not.toBeNull());
    window.location.hash = "#/table";
    await waitFor(() => expect(document.querySelector("[role=dialog]")).toBeNull());
  }
}`,...T.parameters?.docs?.source},description:{story:`A route change closes an open sheet (Plan 5e-1's deferred M3).`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  loaders: [at("#/table/history/2028-06-14")],
  render: (_, {
    loaded
  }) => <Frame s={(loaded as {
    s: Snapshot;
  }).s} />,
  play: async () => {
    const back = await page().findByRole("link", {
      name: "Back to History"
    });
    window.location.hash = back.getAttribute("href")!.slice(1);
    await expect(await page().findByRole("link", {
      name: "Back to Table"
    })).toBeVisible();
  }
}`,...E.parameters?.docs?.source},description:{story:`A deep link to a day: Back to History, whose Back is the Table, never the day again (the mockup review, finding 1).`,...E.parameters?.docs?.description}}}})))()}O();export{w as Back,E as DeepDay,T as RouteClosesSheet,D as __namedExportsOrder,x as default};