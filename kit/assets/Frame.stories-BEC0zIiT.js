import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./checks-CKr9wmxM.js";import{a as i,c as a,i as o,n as s,o as c,r as l,s as u,t as d}from"./BottomNav-DSwl3gpN.js";import{i as f,n as p,r as m,t as h}from"./trophy-wKkWjXLF.js";import{n as g,t as _}from"./list-x-CJ-7P_Yy.js";import{n as v,t as y}from"./Button-DV5UdU4K.js";import{n as b,t as x}from"./Delta-BLQxyyJa.js";import{n as S,t as C}from"./Meter-BvOQaruW.js";import{n as w,t as T}from"./Screen-CdvsTB0D.js";import{n as E,t as D}from"./ProgressBar-VMBSwFAn.js";function O({icon:e,title:t,action:n}){return(0,k.jsxs)(`div`,{className:`grid justify-items-center gap-4 rounded-card bg-surface px-6 py-10 text-center`,children:[(0,k.jsx)(`span`,{className:`grid size-14 place-items-center rounded-full bg-surface-sunken text-fg-muted`,children:(0,k.jsx)(e,{"aria-hidden":!0,size:26})}),(0,k.jsx)(`p`,{className:`text-body font-semibold`,children:t}),n]})}var k;function A(){return(A=e((()=>{k=t(),O.__docgenInfo={description:`Nothing here yet, said as an invitation to act: an icon, a short title and the action.`,methods:[],displayName:`EmptyState`,props:{icon:{required:!0,tsType:{name:`LucideIcon`},description:``},title:{required:!0,tsType:{name:`string`},description:``},action:{required:!1,tsType:{name:`ReactNode`},description:``}}}})))()}function j({shape:e=`line`,className:t=``}){return(0,M.jsx)(`span`,{"data-skeleton":``,"aria-hidden":`true`,className:`block bg-line motion-safe:animate-pulse ${N[e]} ${t}`})}var M,N;function P(){return(P=e((()=>{M=t(),N={line:`h-4 w-3/4 rounded-chip`,block:`h-24 w-full rounded-card`,circle:`size-10 rounded-full`},j.__docgenInfo={description:"A placeholder while something loads: never a blank screen. In `line`, seen on the paper and on white cards alike.\n    Hidden from screen readers (the screen says it's busy).",methods:[],displayName:`Skeleton`,props:{shape:{required:!1,tsType:{name:`union`,raw:`keyof typeof shapes`,elements:[{name:`literal`,value:`line`},{name:`literal`,value:`block`},{name:`literal`,value:`circle`}]},description:``,defaultValue:{value:`"line"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}}}}})))()}var F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{a(),c(),o(),f(),g(),p(),r(),s(),v(),b(),A(),S(),E(),w(),P(),F=t(),{expect:I}=__STORYBOOK_MODULE_TEST__,L={title:`Components/Frame`,parameters:{layout:`fullscreen`}},R=[{href:`#home`,label:`Home`,icon:l,current:!0},{href:`#picks`,label:`Picks`,icon:m,badge:{count:3,label:`missing`}},{href:`#table`,label:`Table`,icon:h},{href:`#matches`,label:`Matches`,icon:u},{href:`#me`,label:`Me`,icon:i}],z={render:()=>(0,F.jsxs)(T,{title:`Today`,nav:(0,F.jsx)(d,{items:R}),children:[Array.from({length:12},(e,t)=>(0,F.jsxs)(`p`,{className:`rounded-card bg-surface p-4`,children:[`Match `,t+1]},t)),(0,F.jsx)(`p`,{"data-last":!0,className:`rounded-card bg-surface p-4`,children:`The last one`})]}),play:async({canvasElement:e})=>{window.scrollTo(0,document.documentElement.scrollHeight),await new Promise(e=>requestAnimationFrame(e));let t=e.querySelector(`[data-last]`).getBoundingClientRect(),r=e.querySelector(`nav`).getBoundingClientRect();await I(t.bottom).toBeLessThanOrEqual(r.top),await n(e)}},B={render:()=>(0,F.jsxs)(T,{title:`Today`,busy:!0,children:[(0,F.jsx)(j,{shape:`line`}),(0,F.jsx)(j,{shape:`block`}),(0,F.jsx)(j,{shape:`circle`})]}),play:async({canvasElement:e})=>{await I(e.querySelector(`main`)).toHaveAttribute(`aria-busy`,`true`);let t=getComputedStyle(e.querySelector(`main`).parentElement).backgroundColor;for(let n of e.querySelectorAll(`[data-skeleton]`))await I(n).toHaveAttribute(`aria-hidden`,`true`),await I(getComputedStyle(n).backgroundColor).not.toBe(t)}},V={render:()=>(0,F.jsx)(T,{title:`Picks`,children:(0,F.jsx)(O,{icon:_,title:`No picks yet`,action:(0,F.jsx)(y,{children:`Pick today's matches`})})}),play:async({canvas:e})=>{await I(e.getByText(`No picks yet`)).toBeVisible(),await I(e.getByRole(`button`,{name:`Pick today's matches`})).toBeVisible()}},H={render:()=>(0,F.jsx)(T,{title:`Table`,children:(0,F.jsx)(O,{icon:_,title:`The race starts after the first results are in`})}),play:async({canvas:e,canvasElement:t})=>{await I(e.getByText(`The race starts after the first results are in`)).toBeVisible(),await n(t)}},U={render:()=>(0,F.jsx)(d,{items:R}),play:async({canvas:e})=>{await I(e.getByRole(`link`,{name:/Picks/})).toHaveAccessibleName(/^Picks ?, 3 missing$/),await I(e.getByRole(`navigation`).querySelector(`[role="status"]`)).toBeNull()}},W={render:()=>(0,F.jsx)(T,{title:`Today`,children:(0,F.jsx)(`div`,{tabIndex:0,"aria-label":`Cards`,className:`flex gap-3 overflow-x-auto`,children:Array.from({length:4},(e,t)=>(0,F.jsxs)(`div`,{className:`grid w-[86%] shrink-0 gap-2 rounded-card bg-surface p-4`,children:[`Card `,t+1,(0,F.jsx)(C,{value:.4,label:`Card ${t+1}'s chance`}),(0,F.jsx)(D,{value:1,max:3,label:`Card ${t+1}'s picks`}),(0,F.jsx)(x,{value:2,places:!0})]},t))})}),play:async({canvasElement:e})=>n(e)},G=[`Page`,`Loading`,`Empty`,`EmptyLong`,`NavBadge`,`WideRow`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`The page frame: a title, the content clear of the bottom bar at the end of a long page.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`Loading: never a blank screen, and busy for screen readers.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`Empty is an invitation to act.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`A long empty state wraps.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <BottomNav items={nav} />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("link", {
      name: /Picks/
    })).toHaveAccessibleName(/^Picks ?, 3 missing$/);
    await expect(canvas.getByRole("navigation").querySelector('[role="status"]')).toBeNull();
  }
}`,...U.parameters?.docs?.source},description:{story:`A count of missing picks on its tab, said after the tab's name ("Picks, 3 missing"), and not announced on its own
as a live region (final review).`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`A row that scrolls sideways inside the screen (a deck of cards) never widens the page.`,...W.parameters?.docs?.description}}}})))()}K();export{V as Empty,H as EmptyLong,B as Loading,U as NavBadge,z as Page,W as WideRow,G as __namedExportsOrder,L as default};