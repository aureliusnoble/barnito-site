import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./Toaster-iUbVR2_Y.js";import{n as i,t as a}from"./Button-D2Gd0djy.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Sheet-BoKGDJR_.js";import{a as l,i as u,r as d}from"./checks-C0Y16pbK.js";function f({label:e,title:t,tone:r}){let i=n();return(0,m.jsx)(a,{onClick:()=>i.add({title:t,...r&&{tone:r}}),children:e})}function p(){let e=n();return(0,m.jsx)(a,{onClick:()=>e.add({title:`8 drafts locked themselves at 12:00`,action:{label:`See`,onClick:D}}),children:`Open`})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{d(),i(),s(),t(),m=o(),{expect:h,fn:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/Toaster`},b=()=>v(document.body),x={render:()=>(0,m.jsx)(r,{children:(0,m.jsx)(f,{label:`Lock`,title:`Locked`})}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{await n.click(e.getByRole(`button`,{name:`Lock`})),await h(await b().findByText(`Locked`)).toBeVisible(),await u(t)}},S={render:()=>(0,m.jsxs)(r,{children:[(0,m.jsx)(f,{label:`Lock`,title:`This pick is locked`,tone:`refused`}),(0,m.jsx)(`span`,{"data-brand":!0,className:`bg-brand`})]}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{await n.click(e.getByRole(`button`,{name:`Lock`}));let r=async()=>(await b().findAllByText(`This pick is locked`)).find(e=>e.closest(`[data-toast]`)),i=await r();await h(i).toBeVisible();let a=i.closest(`[data-toast]`);await h(a.querySelector(`svg`)).not.toBeNull();let o=getComputedStyle(t.querySelector(`[data-brand]`)).backgroundColor;await h(getComputedStyle(a).backgroundColor).not.toBe(o),await new Promise(e=>setTimeout(e,3e3)),await h(await r()).toBeVisible()}},C={render:()=>(0,m.jsx)(r,{children:(0,m.jsx)(f,{label:`Lock`,title:`Locked`})}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Lock`});for(let e=0;e<3;e++)await t.click(n);await _(()=>h(b().getAllByText(`Locked`)).toHaveLength(3));let r=[...document.querySelectorAll(`[data-toast]`)];await h(r.some(e=>e.getBoundingClientRect().height>0)).toBe(!0)}},w={render:()=>(0,m.jsx)(r,{children:(0,m.jsxs)(c.Root,{children:[(0,m.jsx)(c.Trigger,{render:(0,m.jsx)(a,{}),children:`Open`}),(0,m.jsxs)(c.Content,{children:[(0,m.jsx)(c.Header,{children:`England`}),(0,m.jsx)(c.Body,{children:(0,m.jsx)(f,{label:`Lock`,title:`Locked`})})]})]})}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Open`})),await t.click(await b().findByRole(`button`,{name:`Lock`}));let n=await b().findByText(`Locked`);await h(n.closest(`[inert], [aria-hidden="true"]`)).toBeNull()}},T={render:()=>(0,m.jsx)(r,{children:(0,m.jsxs)(c.Root,{children:[(0,m.jsx)(c.Trigger,{render:(0,m.jsx)(a,{}),children:`Open`}),(0,m.jsxs)(c.Content,{children:[(0,m.jsx)(c.Header,{children:`Poland`}),(0,m.jsx)(c.Body,{children:(0,m.jsx)(f,{label:`Draft`,title:`Drafted`})}),(0,m.jsx)(c.Footer,{children:(0,m.jsx)(a,{wide:!0,children:`Lock`})})]})]})}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`Open`})),await t.click(await b().findByRole(`button`,{name:`Draft`}));let n=(await b().findByText(`Drafted`)).closest(`[data-toast]`),r=b().getAllByRole(`dialog`).find(e=>!e.hasAttribute(`data-toast`));await _(()=>h(n.getBoundingClientRect().bottom).toBeLessThanOrEqual(r.getBoundingClientRect().top)),await t.click(b().getByRole(`button`,{name:`Lock`}))}},E={render:()=>(0,m.jsx)(r,{children:(0,m.jsx)(f,{label:`Lock`,title:`That price has moved since you opened it: 57 pts now`,tone:`refused`})}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{await n.click(e.getByRole(`button`,{name:`Lock`})),await h((await b().findAllByText(/57 pts now/)).length).toBeGreaterThan(0),await u(t)}},D=g(),O={render:()=>(0,m.jsx)(r,{children:(0,m.jsx)(p,{})}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{D.mockClear(),await n.click(e.getByRole(`button`,{name:`Open`})),await h(await b().findByText(`8 drafts locked themselves at 12:00`)).toBeVisible();let r=b().getByRole(`button`,{name:`See`});await l(r),await n.click(r),await h(D).toHaveBeenCalledOnce(),await u(t)}},k=[`Locked`,`Refused`,`Stack`,`OverSheet`,`ClearOfTheSheet`,`LongRefusal`,`WithAction`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Toaster>
      <Add label="Lock" title="Locked" />
    </Toaster>,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Lock"
    }));
    await expect(await page().findByText("Locked")).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...x.parameters?.docs?.source},description:{story:`Locking confirms with a toast that names the action's result.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Toaster>
      <Add label="Lock" title="This pick is locked" tone="refused" />
      <span data-brand className="bg-brand" />
    </Toaster>,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Lock"
    }));
    const shown = async () => (await page().findAllByText("This pick is locked")).find(el => el.closest("[data-toast]"))!;
    const title = await shown();
    await expect(title).toBeVisible();
    const toast = title.closest<HTMLElement>("[data-toast]")!;
    await expect(toast.querySelector("svg")).not.toBeNull();
    const brand = getComputedStyle(canvasElement.querySelector("[data-brand]")!).backgroundColor;
    await expect(getComputedStyle(toast).backgroundColor).not.toBe(brand);
    // Left long enough to read (final review): a confirmation goes after 2.5 s, a refusal stays for 6.
    await new Promise(resolve => setTimeout(resolve, 3000));
    await expect(await shown()).toBeVisible();
  }
}`,...S.parameters?.docs?.source},description:{story:`A refusal is shown as the database sent it, with an icon, and not in the brand's colour.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Toaster>
      <Add label="Lock" title="Locked" />
    </Toaster>,
  play: async ({
    canvas,
    userEvent
  }) => {
    const lock = canvas.getByRole("button", {
      name: "Lock"
    });
    for (let i = 0; i < 3; i++) await userEvent.click(lock);
    await waitFor(() => expect(page().getAllByText("Locked")).toHaveLength(3));
    const toasts = [...document.querySelectorAll<HTMLElement>("[data-toast]")];
    await expect(toasts.some(t => t.getBoundingClientRect().height > 0)).toBe(true);
  }
}`,...C.parameters?.docs?.source},description:{story:`Three in a row stack, the newest in front.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Toaster>
      <Sheet.Root>
        <Sheet.Trigger render={<Button />}>Open</Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header>England</Sheet.Header>
          <Sheet.Body>
            <Add label="Lock" title="Locked" />
          </Sheet.Body>
        </Sheet.Content>
      </Sheet.Root>
    </Toaster>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Open"
    }));
    await userEvent.click(await page().findByRole("button", {
      name: "Lock"
    }));
    const title = await page().findByText("Locked");
    await expect(title.closest('[inert], [aria-hidden="true"]')).toBeNull();
  }
}`,...w.parameters?.docs?.source},description:{story:`A toast raised from an open sheet still reaches screen readers.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Toaster>
      <Sheet.Root>
        <Sheet.Trigger render={<Button />}>Open</Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header>Poland</Sheet.Header>
          <Sheet.Body>
            <Add label="Draft" title="Drafted" />
          </Sheet.Body>
          <Sheet.Footer>
            <Button wide>Lock</Button>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Root>
    </Toaster>,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Open"
    }));
    await userEvent.click(await page().findByRole("button", {
      name: "Draft"
    }));
    const toast = (await page().findByText("Drafted")).closest<HTMLElement>("[data-toast]")!;
    const sheet = page().getAllByRole("dialog").find(d => !d.hasAttribute("data-toast"))!;
    await waitFor(() => expect(toast.getBoundingClientRect().bottom).toBeLessThanOrEqual(sheet.getBoundingClientRect().top));
    await userEvent.click(page().getByRole("button", {
      name: "Lock"
    }));
  }
}`,...T.parameters?.docs?.source},description:{story:`While a sheet is open, a toast sits at the top of the screen, clear of the sheet's actions at the bottom: after a
Draft, the next sheet's Lock stays in reach (the delta review, 28 Oct).`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Toaster>
      <Add label="Lock" title="That price has moved since you opened it: 57 pts now" tone="refused" />
    </Toaster>,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Lock"
    }));
    await expect((await page().findAllByText(/57 pts now/)).length).toBeGreaterThan(0);
    await noSidewaysScroll(canvasElement);
  }
}`,...E.parameters?.docs?.source},description:{story:`A long refusal wraps inside its toast.`,...E.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Toaster>
      <AddWithAction />
    </Toaster>,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    see.mockClear();
    await userEvent.click(canvas.getByRole("button", {
      name: "Open"
    }));
    await expect(await page().findByText("8 drafts locked themselves at 12:00")).toBeVisible();
    const action = page().getByRole("button", {
      name: "See"
    });
    await thumbSized(action);
    await userEvent.click(action);
    await expect(see).toHaveBeenCalledOnce();
    await noSidewaysScroll(canvasElement);
  }
}`,...O.parameters?.docs?.source},description:{story:`What locked itself (AL1, the owner, 27 Oct): a toast with an action, "See", which opens Picks; it stays 6 s.`,...O.parameters?.docs?.description}}}})))()}A();export{T as ClearOfTheSheet,x as Locked,E as LongRefusal,w as OverSheet,S as Refused,C as Stack,O as WithAction,k as __namedExportsOrder,y as default};