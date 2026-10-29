import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{o as n,t as r}from"./src-Ca_r4w3v.js";import{i,r as a}from"./checks-C0Y16pbK.js";import{n as o,r as s,t as c}from"./app--B0L3gM3.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{a(),r(),s(),l=t(),{expect:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`App/PickScorers`,parameters:{layout:`fullscreen`}},h={name:`scorers`},g=e=>p(e.ownerDocument.body),_=(e,t)=>g(e).findByText(t,{selector:`[data-toast] *`}),v=async e=>{let t=async()=>(await g(e).findAllByRole(`dialog`)).filter(e=>!e.hasAttribute(`data-toast`));return await f(async()=>u(await t()).toHaveLength(1)),(await t())[0]},y=(e,t)=>[...e.querySelectorAll(`section[aria-label="${t}"] > ul > li`)],b=e=>e.normalize(`NFD`).replace(/\p{Diacritic}/gu,``).toLowerCase(),x=e=>{let t=n(e,`p37`);if(`refusal`in t)throw Error(t.refusal);return t.s},S={loaders:[o(`eve`,void 0,h)],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`heading`,{level:1,name:`Pick scorers`}),await d.type(e.getByRole(`searchbox`,{name:`Find a player`}),`kan`),await f(()=>u(y(t,`Players`).length).toBeGreaterThan(0));for(let e of y(t,`Players`))await u(b(e.getAttribute(`aria-label`))).toContain(`kan`);await d.clear(e.getByRole(`searchbox`,{name:`Find a player`})),await d.click(e.getByRole(`button`,{name:`England v Serbia`})),await f(()=>{for(let e of y(t,`Players`))u(e).toHaveTextContent(`England v Serbia`)}),await i(t)}},C={loaders:[o(`eve`,x,h)],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvas:e,canvasElement:t})=>{await e.findByRole(`heading`,{level:1,name:`Pick scorers`}),await u(y(t,`Yours`)).toHaveLength(3);let[n,r]=y(t,`Players`).filter(e=>p(e).queryByRole(`button`,{name:/^Add /})),i=n.getAttribute(`aria-label`);await d.click(p(n).getByRole(`button`,{name:`Add ${i}`})),await f(()=>u(y(t,`Yours`).map(e=>e.getAttribute(`aria-label`))).toContain(i)),await d.click(p(r).getByRole(`button`,{name:/^Add /})),await u(await _(t,/^4 of 4 scorer picks used$/)).toBeVisible(),await d.click(p(y(t,`Yours`)[0]).getAllByRole(`button`)[0]),await u(await v(t)).toHaveAccessibleName(/^Spain v Slovenia: /)}},w={loaders:[o(`eve`,e=>({...e,absences:[...e.absences,{fixture:`A-1`,player:`es-mikel-oyarzabal`,out:`suspended`,reason:`Yellow Cards`,since:Date.parse(`2028-06-01T20:00:00Z`)}]}),{name:`scorers`,match:`A-1`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvasElement:e})=>{await f(()=>u(y(e,`Players`).length).toBeGreaterThan(0));let t=y(e,`Players`).find(e=>e.getAttribute(`aria-label`)===`Mikel Oyarzabal`);await u(t).toHaveTextContent(`Out`),await d.click(p(t).getAllByRole(`button`)[0]);let n=await v(e);await u(p(n).getByText(`Suspended for Spain v Slovenia: yellow cards. Pick him anyway?`)).toBeVisible()}},T={loaders:[o(`eve`,void 0,{name:`scorers`,match:`A-1`})],render:(e,{loaded:t})=>(0,l.jsx)(c,{loaded:t}),play:async({canvasElement:e})=>{await f(()=>u(y(e,`Players`).length).toBeGreaterThan(0));for(let t of y(e,`Players`))await u(t).toHaveTextContent(`Spain v Slovenia`)}},E=[`SearchAndFilter`,`AddAndOpen`,`OutPlayer`,`OneMatch`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  loaders: [at("eve", undefined, ROUTE)],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Pick scorers"
    });
    await userEvent.type(canvas.getByRole("searchbox", {
      name: "Find a player"
    }), "kan");
    await waitFor(() => expect(list(canvasElement, "Players").length).toBeGreaterThan(0));
    for (const row of list(canvasElement, "Players")) await expect(fold(row.getAttribute("aria-label")!)).toContain("kan");
    await userEvent.clear(canvas.getByRole("searchbox", {
      name: "Find a player"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "England v Serbia"
    }));
    await waitFor(() => {
      for (const row of list(canvasElement, "Players")) expect(row).toHaveTextContent("England v Serbia");
    });
    await noSidewaysScroll(canvasElement);
  }
}`,...S.parameters?.docs?.source},description:{story:`"kan" filters as it's typed; a match's chip narrows the list to it.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  loaders: [at("eve", roomForOne, ROUTE)],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await canvas.findByRole("heading", {
      level: 1,
      name: "Pick scorers"
    });
    await expect(list(canvasElement, "Yours")).toHaveLength(3);
    const [first, second] = list(canvasElement, "Players").filter(r => within(r).queryByRole("button", {
      name: /^Add /
    }));
    const name = first!.getAttribute("aria-label")!;
    await userEvent.click(within(first!).getByRole("button", {
      name: \`Add \${name}\`
    }));
    await waitFor(() => expect(list(canvasElement, "Yours").map(r => r.getAttribute("aria-label"))).toContain(name));
    await userEvent.click(within(second!).getByRole("button", {
      name: /^Add /
    }));
    await expect(await toastSays(canvasElement, /^4 of 4 scorer picks used$/)).toBeVisible();
    await userEvent.click(within(list(canvasElement, "Yours")[0]!).getAllByRole("button")[0]!);
    await expect(await sheet(canvasElement)).toHaveAccessibleName(/^Spain v Slovenia: /);
  }
}`,...C.parameters?.docs?.source},description:{story:`+ adds a draft to Yours; a second, past the allowance, is refused with a toast; a row opens its pick sheet.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  loaders: [at("eve", s => ({
    ...s,
    absences: [...s.absences, {
      fixture: "A-1",
      player: "es-mikel-oyarzabal",
      out: "suspended",
      reason: "Yellow Cards",
      since: Date.parse("2028-06-01T20:00:00Z")
    }]
  }), {
    name: "scorers",
    match: "A-1"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => expect(list(canvasElement, "Players").length).toBeGreaterThan(0));
    const row = list(canvasElement, "Players").find(r => r.getAttribute("aria-label") === "Mikel Oyarzabal")!;
    await expect(row).toHaveTextContent("Out");
    await userEvent.click(within(row).getAllByRole("button")[0]!);
    const pick = await sheet(canvasElement);
    await expect(within(pick).getByText("Suspended for Spain v Slovenia: yellow cards. Pick him anyway?")).toBeVisible();
  }
}`,...w.parameters?.docs?.source},description:{story:`A player who may not play: his sheet warns before you pick him.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  loaders: [at("eve", undefined, {
    name: "scorers",
    match: "A-1"
  })],
  render: (_, {
    loaded
  }) => <AppAt loaded={loaded} />,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => expect(list(canvasElement, "Players").length).toBeGreaterThan(0));
    for (const row of list(canvasElement, "Players")) await expect(row).toHaveTextContent("Spain v Slovenia");
  }
}`,...T.parameters?.docs?.source},description:{story:`From a match's link: the list opens filtered to it.`,...T.parameters?.docs?.description}}}})))()}D();export{C as AddAndOpen,T as OneMatch,w as OutPlayer,S as SearchAndFilter,E as __namedExportsOrder,m as default};