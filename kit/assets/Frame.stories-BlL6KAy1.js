import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./house-CwqHSITP.js";import{n as s,t as c}from"./list-checks-BtPsJ91H.js";import{n as l,t as u}from"./list-x-CJ-7P_Yy.js";import{n as d,t as f}from"./Button-D2Gd0djy.js";import{n as p,t as m}from"./trophy-NaFL7w3d.js";import{t as h}from"./jsx-runtime-DeHZSEgm.js";import{n as g,t as _}from"./BottomNav-DFly8R2j.js";import{n as v,t as y}from"./Delta-6zcblCFP.js";import{n as b,t as x}from"./EmptyState-DcIOSHY8.js";import{n as S,t as C}from"./Meter-mRYx6LCZ.js";import{n as w,t as T}from"./ProgressBar-DRScdJ3F.js";import{n as E,t as D}from"./Screen-DFDJdQbg.js";import{n as O,t as k}from"./Skeleton-Bz-ipZoH.js";import{i as A,r as j}from"./checks-C0Y16pbK.js";var M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{i(),n(),r(),s(),l(),p(),j(),g(),d(),v(),b(),S(),w(),E(),O(),M=h(),{expect:N}=__STORYBOOK_MODULE_TEST__,P={title:`Components/Frame`,parameters:{layout:`fullscreen`}},F=[{href:`#home`,label:`Home`,icon:o,current:!0},{href:`#picks`,label:`Picks`,icon:c,badge:{count:3,label:`missing`}},{href:`#table`,label:`Table`,icon:m},{href:`#matches`,label:`Matches`,icon:t},{href:`#me`,label:`Me`,icon:a}],I={render:()=>(0,M.jsxs)(D,{title:`Today`,nav:(0,M.jsx)(_,{items:F}),children:[Array.from({length:12},(e,t)=>(0,M.jsxs)(`p`,{className:`rounded-card bg-surface p-4`,children:[`Match `,t+1]},t)),(0,M.jsx)(`p`,{"data-last":!0,className:`rounded-card bg-surface p-4`,children:`The last one`})]}),play:async({canvasElement:e})=>{window.scrollTo(0,document.documentElement.scrollHeight),await new Promise(e=>requestAnimationFrame(e));let t=e.querySelector(`[data-last]`).getBoundingClientRect(),n=e.querySelector(`nav`).getBoundingClientRect();await N(t.bottom).toBeLessThanOrEqual(n.top),await A(e)}},L={render:()=>(0,M.jsx)(D,{title:`Match picks`,back:{label:`Picks`,href:`#picks`},nav:(0,M.jsx)(_,{items:F}),children:(0,M.jsx)(`p`,{className:`rounded-card bg-surface p-4`,children:`Today, 12:00`})}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`link`,{name:`Back to Picks`});await N(n).toHaveAttribute(`href`,`#picks`),await N(n).toHaveTextContent(`Picks`),await N(n.getBoundingClientRect().bottom).toBeLessThanOrEqual(e.getByRole(`heading`,{level:1}).getBoundingClientRect().top),await N(n.getBoundingClientRect().height).toBeGreaterThanOrEqual(44),await A(t)}},R={render:()=>(0,M.jsxs)(D,{title:`Today`,busy:!0,children:[(0,M.jsx)(k,{shape:`line`}),(0,M.jsx)(k,{shape:`block`}),(0,M.jsx)(k,{shape:`circle`})]}),play:async({canvasElement:e})=>{await N(e.querySelector(`main`)).toHaveAttribute(`aria-busy`,`true`);let t=getComputedStyle(e.querySelector(`main`).parentElement).backgroundColor;for(let n of e.querySelectorAll(`[data-skeleton]`))await N(n).toHaveAttribute(`aria-hidden`,`true`),await N(getComputedStyle(n).backgroundColor).not.toBe(t)}},z={render:()=>(0,M.jsx)(D,{title:`Picks`,children:(0,M.jsx)(x,{icon:u,title:`No picks yet`,action:(0,M.jsx)(f,{children:`Pick today's matches`})})}),play:async({canvas:e})=>{await N(e.getByText(`No picks yet`)).toBeVisible(),await N(e.getByRole(`button`,{name:`Pick today's matches`})).toBeVisible()}},B={render:()=>(0,M.jsx)(D,{title:`Table`,children:(0,M.jsx)(x,{icon:u,title:`The race starts after the first results are in`})}),play:async({canvas:e,canvasElement:t})=>{await N(e.getByText(`The race starts after the first results are in`)).toBeVisible(),await A(t)}},V={render:()=>(0,M.jsx)(_,{items:F}),play:async({canvas:e})=>{await N(e.getByRole(`link`,{name:/Picks/})).toHaveAccessibleName(/^Picks ?, 3 missing$/),await N(e.getByRole(`navigation`).querySelector(`[role="status"]`)).toBeNull()}},H={render:()=>(0,M.jsx)(D,{title:`Today`,children:(0,M.jsx)(`div`,{tabIndex:0,"aria-label":`Cards`,className:`flex gap-3 overflow-x-auto`,children:Array.from({length:4},(e,t)=>(0,M.jsxs)(`div`,{className:`grid w-[86%] shrink-0 gap-2 rounded-card bg-surface p-4`,children:[`Card `,t+1,(0,M.jsx)(C,{value:.4,label:`Card ${t+1}'s chance`}),(0,M.jsx)(T,{value:1,max:3,label:`Card ${t+1}'s picks`}),(0,M.jsx)(y,{value:2,places:!0})]},t))})}),play:async({canvasElement:e})=>A(e)},U=[`Page`,`Back`,`Loading`,`Empty`,`EmptyLong`,`NavBadge`,`WideRow`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Screen title="Today" nav={<BottomNav items={nav} />}>
      {Array.from({
      length: 12
    }, (_, i) => <p key={i} className="rounded-card bg-surface p-4">
          Match {i + 1}
        </p>)}
      <p data-last className="rounded-card bg-surface p-4">
        The last one
      </p>
    </Screen>,
  play: async ({
    canvasElement
  }) => {
    window.scrollTo(0, document.documentElement.scrollHeight);
    await new Promise(resolve => requestAnimationFrame(resolve));
    const last = canvasElement.querySelector("[data-last]")!.getBoundingClientRect();
    const bar = canvasElement.querySelector("nav")!.getBoundingClientRect();
    await expect(last.bottom).toBeLessThanOrEqual(bar.top);
    await noSidewaysScroll(canvasElement);
  }
}`,...I.parameters?.docs?.source},description:{story:`The page frame: a title, the content clear of the bottom bar at the end of a long page.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Screen title="Match picks" back={{
    label: "Picks",
    href: "#picks"
  }} nav={<BottomNav items={nav} />}>
      <p className="rounded-card bg-surface p-4">Today, 12:00</p>
    </Screen>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const back = canvas.getByRole("link", {
      name: "Back to Picks"
    });
    await expect(back).toHaveAttribute("href", "#picks");
    await expect(back).toHaveTextContent("Picks");
    // Above the title, and big enough for a thumb.
    await expect(back.getBoundingClientRect().bottom).toBeLessThanOrEqual(canvas.getByRole("heading", {
      level: 1
    }).getBoundingClientRect().top);
    await expect(back.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    await noSidewaysScroll(canvasElement);
  }
}`,...L.parameters?.docs?.source},description:{story:`A screen under a tab ("Match picks" under Picks): the way back above its title, "‹ Picks".`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Screen title="Today" busy>
      <Skeleton shape="line" />
      <Skeleton shape="block" />
      <Skeleton shape="circle" />
    </Screen>,
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector("main")).toHaveAttribute("aria-busy", "true");
    const page = getComputedStyle(canvasElement.querySelector("main")!.parentElement!).backgroundColor;
    for (const s of canvasElement.querySelectorAll("[data-skeleton]")) {
      await expect(s).toHaveAttribute("aria-hidden", "true");
      // Seen on the paper: a placeholder the colour of the page would leave the screen blank.
      await expect(getComputedStyle(s).backgroundColor).not.toBe(page);
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`Loading: never a blank screen, and busy for screen readers.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Screen title="Picks">
      <EmptyState icon={ListX} title="No picks yet" action={<Button>Pick today's matches</Button>} />
    </Screen>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("No picks yet")).toBeVisible();
    await expect(canvas.getByRole("button", {
      name: "Pick today's matches"
    })).toBeVisible();
  }
}`,...z.parameters?.docs?.source},description:{story:`Empty is an invitation to act.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Screen title="Table">
      <EmptyState icon={ListX} title="The race starts after the first results are in" />
    </Screen>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByText("The race starts after the first results are in")).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...B.parameters?.docs?.source},description:{story:`A long empty state wraps.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <BottomNav items={nav} />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("link", {
      name: /Picks/
    })).toHaveAccessibleName(/^Picks ?, 3 missing$/);
    await expect(canvas.getByRole("navigation").querySelector('[role="status"]')).toBeNull();
  }
}`,...V.parameters?.docs?.source},description:{story:`A count of missing picks on its tab, said after the tab's name ("Picks, 3 missing"), and not announced on its own
as a live region (final review).`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Screen title="Today">
      <div tabIndex={0} aria-label="Cards" className="flex gap-3 overflow-x-auto">
        {Array.from({
        length: 4
      }, (_, i) => <div key={i} className="grid w-[86%] shrink-0 gap-2 rounded-card bg-surface p-4">
            Card {i + 1}
            {/* Screen-reader-only labels inside the cards must not escape the row either. */}
            <Meter value={0.4} label={\`Card \${i + 1}'s chance\`} />
            <ProgressBar value={1} max={3} label={\`Card \${i + 1}'s picks\`} />
            <Delta value={2} places />
          </div>)}
      </div>
    </Screen>,
  play: async ({
    canvasElement
  }) => noSidewaysScroll(canvasElement)
}`,...H.parameters?.docs?.source},description:{story:`A row that scrolls sideways inside the screen (a deck of cards) never widens the page.`,...H.parameters?.docs?.description}}}})))()}W();export{L as Back,z as Empty,B as EmptyLong,R as Loading,V as NavBadge,I as Page,H as WideRow,U as __namedExportsOrder,P as default};