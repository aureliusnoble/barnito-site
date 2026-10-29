import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Countdown-C7mZiO2z.js";import{n as i,t as a}from"./Delta-6zcblCFP.js";import{n as o,t as s}from"./Meter-mRYx6LCZ.js";import{n as c,t as l}from"./ProgressBar-DRScdJ3F.js";import{n as u,t as d}from"./NumberText-DknPorbd.js";import{i as f,r as p}from"./checks-C0Y16pbK.js";var m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{p(),n(),i(),o(),u(),c(),m=t(),{expect:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Numbers`},_={render:()=>(0,m.jsx)(s,{value:.61,label:`England's chance`}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`meter`,{name:`England's chance`});await h(n).toHaveAttribute(`aria-valuenow`,`61`),await f(t)}},v={render:()=>(0,m.jsx)(l,{value:6,max:9,label:`Today's picks`}),play:async({canvas:e,canvasElement:t})=>{await h(e.getByRole(`progressbar`,{name:`Today's picks`})).toBeVisible(),await h(e.getByText(`6 of 9`)).toBeVisible(),await f(t)}},y={render:()=>(0,m.jsxs)(`div`,{className:`grid gap-3`,children:[(0,m.jsx)(r,{minutes:230,until:`12:00`}),(0,m.jsx)(r,{minutes:45,until:`12:00`}),(0,m.jsx)(r,{minutes:0,until:`12:00`}),(0,m.jsx)(`span`,{"data-warn":!0,className:`text-warn`})]}),play:async({canvas:e,canvasElement:t})=>{await h(e.getByText(`3h 50m`)).toBeVisible(),await h(e.getByText(`Locked`)).toBeVisible();let n=getComputedStyle(t.querySelector(`[data-warn]`)).color;await h(getComputedStyle(e.getByText(`45m`).closest(`[role=timer]`)).color).toBe(n),await h(getComputedStyle(e.getByText(`3h 50m`).closest(`[role=timer]`)).color).not.toBe(n),await f(t)}},b={render:()=>(0,m.jsxs)(`div`,{className:`grid gap-3`,children:[(0,m.jsx)(`span`,{"data-case":`gain`,children:(0,m.jsx)(a,{value:45,unit:`pts`})}),(0,m.jsx)(`span`,{"data-case":`loss`,children:(0,m.jsx)(a,{value:-12})}),(0,m.jsx)(`span`,{"data-case":`places`,children:(0,m.jsx)(a,{value:3,places:!0})}),(0,m.jsx)(`span`,{"data-case":`level`,children:(0,m.jsx)(a,{value:0,places:!0})})]}),play:async({canvasElement:e})=>{let t=t=>e.querySelector(`[data-case="${t}"]`).textContent??``;await h(t(`gain`)).toContain(`▲`),await h(t(`gain`)).toContain(`+45 pts`),await h(t(`loss`)).toContain(`▼`),await h(t(`loss`)).toContain(`−12`),await h(t(`places`)).toContain(`▲`),await h(t(`places`)).toContain(`3`),await h(t(`places`)).not.toContain(`+`),await h(t(`level`)).toContain(`=`),await f(e)}},x={render:()=>(0,m.jsx)(`p`,{"data-testid":`line`,children:(0,m.jsx)(d,{text:`+0.9 a goal won, −89.1 a goal lost, by 12:00`})}),play:async({canvas:e})=>{let t=[...e.getByTestId(`line`).querySelectorAll(`.font-num`)].map(e=>e.textContent);await h(t).toEqual([`+0.9`,`−89.1`,`12:00`])}},S=[`ChanceMeter`,`PicksProgress`,`Countdowns`,`Deltas`,`SignedDecimals`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`The chance as a bar, named for screen readers, with nothing written of its own.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`The one clock: hours and minutes to noon, amber in the last hour.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Ups and downs: an arrow and a sign, never colour alone.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <p data-testid="line">
      <NumberText text="+0.9 a goal won, −89.1 a goal lost, by 12:00" />
    </p>,
  play: async ({
    canvas
  }) => {
    const runs = [...canvas.getByTestId("line").querySelectorAll(".font-num")].map(el => el.textContent);
    await expect(runs).toEqual(["+0.9", "−89.1", "12:00"]);
  }
}`,...x.parameters?.docs?.source},description:{story:`A number keeps its sign and its decimals in the number font (F75): "+0.9" and "−89.1" are one run each, as is "12:00".`,...x.parameters?.docs?.description}}}})))()}C();export{_ as ChanceMeter,y as Countdowns,b as Deltas,v as PicksProgress,x as SignedDecimals,S as __namedExportsOrder,g as default};