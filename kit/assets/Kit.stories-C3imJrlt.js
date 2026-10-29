import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./checks-C0Y16pbK.js";import{a as i,c as a,d as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./Tooltip-BXSUn0gk.js";import{i as m,n as h,r as g,t as _}from"./Windows-DZ7kW4sm.js";function v(){let e=e=>a({domain:[M[0],M.at(-1)],range:[k.left,e-k.right]}),t=i(M,(t,n)=>e(n).invert(t).getTime()),n=t.index,r=p({domain:[0,1],range:[O-k.bottom,k.top]});return(0,y.jsx)(`div`,{className:`max-w-[390px] rounded-card bg-surface p-3`,children:(0,y.jsx)(l,{label:`England's chance, eight days`,height:O,table:{caption:`England's chance by day`,columns:[`Day`,`Chance`],rows:M.map((e,t)=>[new Date(e).toISOString().slice(0,10),`${Math.round(N[t]*100)}%`])},overlay:({width:r})=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`div`,{...t.keys,"aria-label":`Scrub England's chance`,"aria-valuetext":n===null?`None`:`Day ${n+1}`,className:`pointer-events-none absolute inset-0 rounded-tile -outline-offset-2 focus-visible:outline-2 focus-visible:outline-brand-fg`}),n!==null&&(0,y.jsx)(f,{x:e(r)(M[n]),width:r,title:`Day ${n+1}`,rows:[{key:`home`,tone:`series-home`,value:`${Math.round(N[n]*100)}%`,label:`England`}]})]}),children:({width:i})=>{let a=e(i);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`polyline`,{points:M.map((e,t)=>`${a(e)},${r(N[t])}`).join(` `),className:`fill-none stroke-series-home`,strokeWidth:2}),n!==null&&(0,y.jsx)(`line`,{x1:a(M[n]),x2:a(M[n]),y1:k.top,y2:O-k.bottom,className:`stroke-fg`,strokeWidth:1}),(0,y.jsx)(`rect`,{x:0,y:0,width:i,height:O,fill:`transparent`,...t.bind})]})}})})}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{o(),s(),r(),d(),g(),u(),c(),h(),y=t(),{expect:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Charts/Kit`,parameters:{layout:`padded`}},C=864e5,w=Date.parse(`2028-06-01T11:00:00Z`),T=w+2*C,E=w+13*C,D=E+5*C,O=200,k={top:8,right:12,bottom:8,left:12},A={render:()=>(0,y.jsx)(`div`,{className:`max-w-[390px] rounded-card bg-surface p-3`,children:(0,y.jsx)(l,{label:`When the match can be drafted and locked`,height:O,table:{caption:`Windows`,columns:[`Window`,`From`],rows:[[`Drafts open`,`3 Jun`],[`Locked`,`14 Jun, 12:00`]]},children:({width:e})=>{let t=a({domain:[w,D],range:[k.left,e-k.right]});return(0,y.jsx)(_,{x:e=>t(e),height:O-k.bottom,windows:{draftingFrom:T,deadline:E,end:D}})}})}),play:async({canvas:e,canvasElement:t})=>{let r=await e.findByRole(`img`,{name:`When the match can be drafted and locked`});await b(r.querySelector(`[data-period='drafting']`)).toHaveTextContent(`Drafts open`),await b(r.querySelector(`[data-period='locked']`)).toHaveTextContent(`Locked`),await n(t)}},j={render:()=>{let e=m(Array.from({length:20},(e,t)=>({key:`f${t}`,x:180,y:110,side:t%2?-1:1})));return(0,y.jsxs)(`svg`,{role:`img`,"aria-label":`Twenty faces at one point`,width:360,height:240,className:`block rounded-card bg-surface`,children:[e.map(e=>(0,y.jsxs)(`g`,{"data-face":``,children:[(e.fx!==e.x||e.fy!==e.y)&&(0,y.jsx)(`line`,{x1:e.x,y1:e.y,x2:e.fx,y2:e.fy,className:`stroke-line-strong`,strokeWidth:1}),(0,y.jsx)(`circle`,{cx:e.fx,cy:e.fy,r:9.5,className:`fill-surface stroke-series-draw`,strokeWidth:2})]},e.key)),(0,y.jsx)(`circle`,{cx:180,cy:110,r:2.5,className:`fill-fg`})]})},play:async({canvasElement:e})=>{await b(e.querySelectorAll(`[data-face]`)).toHaveLength(20)}},M=Array.from({length:8},(e,t)=>w+t*C),N=[.42,.45,.44,.5,.48,.53,.55,.52],P={render:()=>(0,y.jsx)(v,{}),play:async({canvas:e,userEvent:t})=>{(await e.findByRole(`slider`,{name:`Scrub England's chance`})).focus(),await t.keyboard(`{ArrowRight}`);let n=await e.findByRole(`status`);await b(n).toHaveTextContent(`Day 1`),await b(n).toHaveTextContent(`42%England`),await t.keyboard(`{End}`),await b(e.getByRole(`status`)).toHaveTextContent(`52%`),await t.keyboard(`{Escape}`),await b(e.queryByRole(`status`)).toBeNull()}},F={render:()=>(0,y.jsx)(v,{}),play:async({canvas:e})=>{let t=e.getByRole(`table`,{name:`England's chance by day`});await b(x(t).getAllByRole(`row`)).toHaveLength(9)}},I=[`WindowsOnTwoWeeks`,`TwentyFaces`,`ScrubByKeys`,`HiddenTable`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-[390px] rounded-card bg-surface p-3">
      <ChartFrame label="When the match can be drafted and locked" height={H} table={{
      caption: "Windows",
      columns: ["Window", "From"],
      rows: [["Drafts open", "3 Jun"], ["Locked", "14 Jun, 12:00"]]
    }}>
        {({
        width
      }) => {
        const x = scaleTime({
          domain: [start, end],
          range: [M.left, width - M.right]
        });
        return <Windows x={t => x(t)} height={H - M.bottom} windows={{
          draftingFrom,
          deadline,
          end
        }} />;
      }}
      </ChartFrame>
    </div>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const img = await canvas.findByRole("img", {
      name: "When the match can be drafted and locked"
    });
    await expect(img.querySelector("[data-period='drafting']")).toHaveTextContent("Drafts open");
    await expect(img.querySelector("[data-period='locked']")).toHaveTextContent("Locked");
    await noSidewaysScroll(canvasElement);
  }
}`,...A.parameters?.docs?.source},description:{story:`The three periods on a 19-day domain (the owner, 27 Oct): unshaded before drafts open, drafting, then locked.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const faces = placeFaces(Array.from({
      length: 20
    }, (_, i) => ({
      key: \`f\${i}\`,
      x: 180,
      y: 110,
      side: (i % 2 ? -1 : 1) as 1 | -1
    })));
    return <svg role="img" aria-label="Twenty faces at one point" width={360} height={240} className="block rounded-card bg-surface">
        {faces.map(f => <g key={f.key} data-face="">
            {(f.fx !== f.x || f.fy !== f.y) && <line x1={f.x} y1={f.y} x2={f.fx} y2={f.fy} className="stroke-line-strong" strokeWidth={1} />}
            <circle cx={f.fx} cy={f.fy} r={9.5} className="fill-surface stroke-series-draw" strokeWidth={2} />
          </g>)}
        <circle cx={180} cy={110} r={2.5} className="fill-fg" />
      </svg>;
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelectorAll("[data-face]")).toHaveLength(20);
  }
}`,...j.parameters?.docs?.source},description:{story:`Twenty lock faces at one point step aside, none overlapping, each with a leader line back to the point.`,...j.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Scrubbed />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const slider = await canvas.findByRole("slider", {
      name: "Scrub England's chance"
    });
    slider.focus();
    await userEvent.keyboard("{ArrowRight}");
    const tip = await canvas.findByRole("status");
    await expect(tip).toHaveTextContent("Day 1");
    await expect(tip).toHaveTextContent("42%England");
    await userEvent.keyboard("{End}");
    await expect(canvas.getByRole("status")).toHaveTextContent("52%");
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("status")).toBeNull();
  }
}`,...P.parameters?.docs?.source},description:{story:`Moved by the keyboard: ArrowRight steps a day and the tooltip reads it, value first; Escape clears it.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Scrubbed />,
  play: async ({
    canvas
  }) => {
    const table = canvas.getByRole("table", {
      name: "England's chance by day"
    });
    await expect(within(table).getAllByRole("row")).toHaveLength(9);
  }
}`,...F.parameters?.docs?.source},description:{story:`The drawing's data is a table in the accessibility tree.`,...F.parameters?.docs?.description}}}})))()}L();export{F as HiddenTable,P as ScrubByKeys,j as TwentyFaces,A as WindowsOnTwoWeeks,I as __namedExportsOrder,S as default};