import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./Toaster-iUbVR2_Y.js";import{t as n}from"./Button-D2Gd0djy.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,m as a,n as o,s,t as c,u as l}from"./Sheets-DkzTz-by.js";import{Et as u,t as d,zt as f}from"./src-Ca_r4w3v.js";function p(){let e=l(),t=t=>()=>e.setMoment(t);return(0,m.jsxs)(`div`,{className:`grid gap-3`,children:[(0,m.jsxs)(`p`,{children:[`Moment: `,e.ready?e.moment:`loading`]}),e.ready&&(0,m.jsxs)(`p`,{children:[`Germany v Poland: `,u(e.s,b)?.status??`no pick`]}),(0,m.jsx)(n,{onClick:()=>e.ready&&e.act.draft(b),children:`Draft Germany`}),(0,m.jsx)(n,{onClick:()=>e.open({kind:`lock`}),children:`Open the lock sheet`}),(0,m.jsx)(n,{onClick:()=>e.ready&&e.setNamed([`raj`]),children:`Name Raj`}),e.ready&&(0,m.jsxs)(`p`,{children:[`Named: `,e.named?.join(`, `)??`nobody`]}),(0,m.jsx)(n,{onClick:t(`night`),children:`Night`}),(0,m.jsx)(n,{onClick:t(`morning`),children:`Morning`}),e.ready&&(0,m.jsx)(c,{})]})}var m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{a(),d(),o(),i(),m=r(),{expect:h,fireEvent:g,waitFor:_}=__STORYBOOK_MODULE_TEST__,v={title:`App/Store`,parameters:{layout:`padded`}},y=async()=>{for(let e of f)localStorage.removeItem(`barnito-mock:catch-up:${e.id}`);return{s:await f.find(e=>e.id===`morning`).load()}},b={kind:`result`,fixture:`C-4`,outcome:`home`},x={loaders:[y],render:(e,{loaded:n})=>(0,m.jsx)(t,{children:(0,m.jsx)(s,{initial:{moment:`morning`,snapshot:n.s},children:(0,m.jsx)(p,{})})}),play:async({canvas:e,canvasElement:t})=>{let n=t.ownerDocument.body;await g.click(e.getByRole(`button`,{name:`Draft Germany`})),await h(e.getByText(`Germany v Poland: draft`)).toBeVisible(),await g.click(e.getByRole(`button`,{name:`Open the lock sheet`})),await _(()=>h(n.querySelector(`[role=dialog]`)).not.toBeNull()),await g.click(e.getByRole(`button`,{name:`Night`,hidden:!0})),await _(()=>h(e.getByText(`Moment: night`)).toBeVisible(),{timeout:1e4}),await _(()=>h(n.querySelector(`[role=dialog]`)).toBeNull()),await h(e.getByText(/^Germany v Poland: /)).not.toHaveTextContent(`draft`),await g.click(e.getByRole(`button`,{name:`Morning`})),await _(()=>h(e.getByText(`Germany v Poland: draft`)).toBeVisible())}},S={loaders:[y],render:(e,{loaded:n})=>(0,m.jsx)(t,{children:(0,m.jsx)(s,{initial:{moment:`morning`,snapshot:n.s},children:(0,m.jsx)(p,{})})}),play:async({canvas:e})=>{await h(e.getByText(`Named: nobody`)).toBeVisible(),await g.click(e.getByRole(`button`,{name:`Name Raj`})),await h(e.getByText(`Named: raj`)).toBeVisible(),await g.click(e.getByRole(`button`,{name:`Night`})),await _(()=>h(e.getByText(`Moment: night`)).toBeVisible(),{timeout:1e4}),await h(e.getByText(`Named: raj`)).toBeVisible()}},C=[`SwitchingMoments`,`NamedForTheSession`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  loaders: [fresh],
  render: (_, {
    loaded
  }) => <Toaster>
      <MockProvider initial={{
      moment: "morning",
      snapshot: (loaded as {
        s: Snapshot;
      }).s
    }}>
        <Probe />
      </MockProvider>
    </Toaster>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const page = canvasElement.ownerDocument.body;
    await fireEvent.click(canvas.getByRole("button", {
      name: "Draft Germany"
    }));
    await expect(canvas.getByText("Germany v Poland: draft")).toBeVisible();
    await fireEvent.click(canvas.getByRole("button", {
      name: "Open the lock sheet"
    }));
    await waitFor(() => expect(page.querySelector("[role=dialog]")).not.toBeNull());
    // Behind the open sheet, as a programme would: the sheet closes and the night is painted.
    await fireEvent.click(canvas.getByRole("button", {
      name: "Night",
      hidden: true
    }));
    await waitFor(() => expect(canvas.getByText("Moment: night")).toBeVisible(), {
      timeout: 10_000
    });
    await waitFor(() => expect(page.querySelector("[role=dialog]")).toBeNull());
    await expect(canvas.getByText(/^Germany v Poland: /)).not.toHaveTextContent("draft");
    await fireEvent.click(canvas.getByRole("button", {
      name: "Morning"
    }));
    await waitFor(() => expect(canvas.getByText("Germany v Poland: draft")).toBeVisible());
  }
}`,...x.parameters?.docs?.source},description:{story:`Switching moments with a sheet open closes it and paints the new moment; each moment keeps your changes for the
session (the plan's Review Focus 4).`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  loaders: [fresh],
  render: (_, {
    loaded
  }) => <Toaster>
      <MockProvider initial={{
      moment: "morning",
      snapshot: (loaded as {
        s: Snapshot;
      }).s
    }}>
        <Probe />
      </MockProvider>
    </Toaster>,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Named: nobody")).toBeVisible();
    await fireEvent.click(canvas.getByRole("button", {
      name: "Name Raj"
    }));
    await expect(canvas.getByText("Named: raj")).toBeVisible();
    await fireEvent.click(canvas.getByRole("button", {
      name: "Night"
    }));
    await waitFor(() => expect(canvas.getByText("Moment: night")).toBeVisible(), {
      timeout: 10_000
    });
    await expect(canvas.getByText("Named: raj")).toBeVisible();
  }
}`,...S.parameters?.docs?.source},description:{story:`Who you name on History's chart stays for the session, whichever moment you look at (Plan 5e-2).`,...S.parameters?.docs?.description}}}})))()}w();export{S as NamedForTheSession,x as SwitchingMoments,C as __namedExportsOrder,v as default};