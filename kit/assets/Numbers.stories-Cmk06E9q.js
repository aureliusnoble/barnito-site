import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./checks-CKr9wmxM.js";import{n as i,t as a}from"./Delta-BLQxyyJa.js";import{n as o,t as s}from"./Meter-BvOQaruW.js";import{n as c,t as l}from"./Countdown--RNDdbMb.js";import{n as u,t as d}from"./ProgressBar-VMBSwFAn.js";var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),c(),i(),o(),u(),f=t(),{expect:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Numbers`},h={render:()=>(0,f.jsx)(s,{value:.61,label:`England's chance`}),play:async({canvas:e,canvasElement:t})=>{let r=e.getByRole(`meter`,{name:`England's chance`});await p(r).toHaveAttribute(`aria-valuenow`,`61`),await n(t)}},g={render:()=>(0,f.jsx)(d,{value:6,max:9,label:`Today's picks`}),play:async({canvas:e,canvasElement:t})=>{await p(e.getByRole(`progressbar`,{name:`Today's picks`})).toBeVisible(),await p(e.getByText(`6 of 9`)).toBeVisible(),await n(t)}},_={render:()=>(0,f.jsxs)(`div`,{className:`grid gap-3`,children:[(0,f.jsx)(l,{minutes:230,until:`12:00`}),(0,f.jsx)(l,{minutes:45,until:`12:00`}),(0,f.jsx)(l,{minutes:0,until:`12:00`}),(0,f.jsx)(`span`,{"data-warn":!0,className:`text-warn`})]}),play:async({canvas:e,canvasElement:t})=>{await p(e.getByText(`3h 50m`)).toBeVisible(),await p(e.getByText(`Locked`)).toBeVisible();let r=getComputedStyle(t.querySelector(`[data-warn]`)).color;await p(getComputedStyle(e.getByText(`45m`).closest(`[role=timer]`)).color).toBe(r),await p(getComputedStyle(e.getByText(`3h 50m`).closest(`[role=timer]`)).color).not.toBe(r),await n(t)}},v={render:()=>(0,f.jsxs)(`div`,{className:`grid gap-3`,children:[(0,f.jsx)(`span`,{"data-case":`gain`,children:(0,f.jsx)(a,{value:45,unit:`pts`})}),(0,f.jsx)(`span`,{"data-case":`loss`,children:(0,f.jsx)(a,{value:-12})}),(0,f.jsx)(`span`,{"data-case":`places`,children:(0,f.jsx)(a,{value:3,places:!0})}),(0,f.jsx)(`span`,{"data-case":`level`,children:(0,f.jsx)(a,{value:0,places:!0})})]}),play:async({canvasElement:e})=>{let t=t=>e.querySelector(`[data-case="${t}"]`).textContent??``;await p(t(`gain`)).toContain(`▲`),await p(t(`gain`)).toContain(`+45 pts`),await p(t(`loss`)).toContain(`▼`),await p(t(`loss`)).toContain(`−12`),await p(t(`places`)).toContain(`▲`),await p(t(`places`)).toContain(`3`),await p(t(`places`)).not.toContain(`+`),await p(t(`level`)).toContain(`=`),await n(e)}},y=[`ChanceMeter`,`PicksProgress`,`Countdowns`,`Deltas`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Meter value={0.61} label="England's chance" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const meter = canvas.getByRole("meter", {
      name: "England's chance"
    });
    await expect(meter).toHaveAttribute("aria-valuenow", "61");
    await noSidewaysScroll(canvasElement);
  }
}`,...h.parameters?.docs?.source},description:{story:`The chance as a bar, named for screen readers, with nothing written of its own.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ProgressBar value={6} max={9} label="Today's picks" />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByRole("progressbar", {
      name: "Today's picks"
    })).toBeVisible();
    await expect(canvas.getByText("6 of 9")).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-3">
      <Countdown minutes={230} until="12:00" />
      <Countdown minutes={45} until="12:00" />
      <Countdown minutes={0} until="12:00" />
      <span data-warn className="text-warn" />
    </div>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByText("3h 50m")).toBeVisible();
    await expect(canvas.getByText("Locked")).toBeVisible();
    const warn = getComputedStyle(canvasElement.querySelector("[data-warn]")!).color;
    await expect(getComputedStyle(canvas.getByText("45m").closest("[role=timer]")!).color).toBe(warn);
    await expect(getComputedStyle(canvas.getByText("3h 50m").closest("[role=timer]")!).color).not.toBe(warn);
    await noSidewaysScroll(canvasElement);
  }
}`,..._.parameters?.docs?.source},description:{story:`The one clock: hours and minutes to noon, amber in the last hour.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-3">
      <span data-case="gain">
        <Delta value={45} unit="pts" />
      </span>
      <span data-case="loss">
        <Delta value={-12} />
      </span>
      <span data-case="places">
        <Delta value={3} places />
      </span>
      <span data-case="level">
        <Delta value={0} places />
      </span>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const text = (c: string) => canvasElement.querySelector(\`[data-case="\${c}"]\`)!.textContent ?? "";
    await expect(text("gain")).toContain("▲");
    await expect(text("gain")).toContain("+45 pts");
    await expect(text("loss")).toContain("▼");
    await expect(text("loss")).toContain("−12");
    await expect(text("places")).toContain("▲");
    await expect(text("places")).toContain("3");
    await expect(text("places")).not.toContain("+");
    await expect(text("level")).toContain("=");
    await noSidewaysScroll(canvasElement);
  }
}`,...v.parameters?.docs?.source},description:{story:`Ups and downs: an arrow and a sign, never colour alone.`,...v.parameters?.docs?.description}}}})))()}b();export{h as ChanceMeter,_ as Countdowns,v as Deltas,g as PicksProgress,y as __namedExportsOrder,m as default};