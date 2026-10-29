import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./ScheduleControls-DC8QUA0g.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{ct as l,t as u,w as d}from"./src-Ca_r4w3v.js";import{i as f,n as p,r as m}from"./checks-C0Y16pbK.js";import{i as h,t as g}from"./moments-Bzx1n_TW.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{u(),_=t(),m(),g(),a(),r(),i(),v=c(),{expect:y,fn:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Domain/Schedule`,parameters:{layout:`padded`}},w=e=>Date.parse(e),T=e=>`#/team/${e}`,E=e=>`#/match/${e}`,D=(e,t)=>async()=>{let n=structuredClone((await h(e)()).s);return t(n),{s:n}},O={loaders:[h(`morning`)],render:(e,{loaded:t})=>(0,v.jsx)(n,{day:d(t.s).day,teamHref:T,matchHref:E}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByRole(`region`,{name:`Today`}),i=S(r).getAllByRole(`group`,{name:/^Match \d of 3$/});await y(i).toHaveLength(3),await y(S(i[0]).getByRole(`link`,{name:/You: Draw/})).toHaveAttribute(`href`,`#/match/B-4`);let a=S(e.getByRole(`group`,{name:`Slides`})).getAllByRole(`button`);await y(a.map(e=>e.getAttribute(`aria-current`))).toEqual([`true`,`false`,`false`]),await n.click(a[2]),await x(()=>y(a[2]).toHaveAttribute(`aria-current`,`true`)),await f(t),await p(()=>i)}},k={loaders:[D(`knockouts`,e=>e.now=w(`2028-06-22T09:00:00Z`))],render:(e,{loaded:t})=>(0,v.jsx)(n,{day:d(t.s).day,matchHref:E}),play:async({canvas:e})=>{await y(e.getByRole(`heading`,{name:`Sat 24 Jun`})).toBeVisible(),await y(e.getAllByRole(`group`,{name:/^Match \d of 2$/})).toHaveLength(2)}},A={loaders:[D(`morning`,e=>e.fixtures=e.fixtures.filter(e=>![`C-3`,`C-4`].includes(e.id)))],render:(e,{loaded:t})=>(0,v.jsx)(n,{day:d(t.s).day,matchHref:E}),play:async({canvas:e})=>{await y(e.queryByRole(`group`,{name:`Slides`})).toBeNull()}},j={loaders:[h(`night`)],render:(e,{loaded:t})=>{let{s:n}=t,r=[...d(n,{side:`past`}).cards.slice(0,2),...d(n).cards.slice(0,1)];return(0,v.jsx)(`div`,{className:`grid gap-3`,children:r.map(e=>(0,v.jsx)(o,{card:e,href:E(e.id),teamHref:T},e.id))})},play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`link`,{name:/^Germany v Poland/});await y(n).toHaveAttribute(`href`,`#/match/C-4`);let r=n.closest(`article`);await y(r).toHaveTextContent(/FT/),await y(S(r).getByRole(`link`,{name:`Germany`})).toHaveAttribute(`href`,`#/team/DE`);let i=r.getBoundingClientRect();await y(document.elementFromPoint(i.right-6,i.bottom-6)?.closest(`a`)).toBe(n),await f(t)}},M={loaders:[D(`morning`,e=>{e.catchUp={seenAt:w(`2028-06-14T10:00:00Z`),ask:!0,hidden:{fixtures:[`A-3`,`A-4`,`B-3`],revealed:[],answered:[],until:w(`2028-06-15T11:00:00Z`)}}})],render:(e,{loaded:t})=>{let n=d(l(t.s),{side:`past`}).cards.find(e=>e.id===`A-3`);return(0,v.jsx)(o,{card:n,href:E(n.id)})},play:async({canvasElement:e})=>{let t=e.querySelector(`article`);await y(t).not.toHaveTextContent(`FT`),await y(t.querySelectorAll(`[data-goals]`)).toHaveLength(0)}},N=b(),P={loaders:[h(`morning`)],render:function(e,{loaded:t}){let{s:n}=t,[r,i]=(0,_.useState)(`upcoming`),[a,o]=(0,_.useState)(),[c,l]=(0,_.useState)(),u=d(n,{side:r,...a&&{round:a},...c&&{order:c}});return(0,v.jsxs)(`div`,{className:`grid gap-3`,children:[(0,v.jsx)(s,{side:u.side,order:u.order,rounds:u.rounds,...a&&{round:a},onSide:e=>{N(e),i(e),o(void 0),l(void 0)},onOrder:l,onRound:e=>o(e??void 0)}),(0,v.jsx)(`p`,{"data-first":``,children:u.cards[0]?.id})]})},play:async({canvas:e,canvasElement:t,userEvent:n})=>{N.mockClear(),await y(e.getByRole(`button`,{name:`Upcoming`})).toHaveAttribute(`aria-pressed`,`true`),await y(t.querySelector(`[data-first]`)).toHaveTextContent(`B-4`),await n.click(e.getByRole(`button`,{name:`Matchday 3`})),await y(t.querySelector(`[data-first]`)).toHaveTextContent(`A-5`),await n.click(e.getByRole(`button`,{name:`Past`})),await y(N).toHaveBeenCalledWith(`past`),await y(t.querySelector(`[data-first]`)).toHaveTextContent(`B-3`),await n.click(e.getByRole(`button`,{name:`Date, latest first`})),await y(t.querySelector(`[data-first]`)).toHaveTextContent(`A-1`),await y(e.getAllByRole(`button`,{name:/^Matchday/}).map(e=>e.textContent)).toEqual([`Matchday 1`,`Matchday 2`]),await f(t)}},F=[`Today`,`NextDay`,`OneMatch`,`LittleCards`,`HiddenCard`,`Controls`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: (_, {
    loaded
  }) => <DaySlides day={schedule((loaded as Loaded).s).day!} teamHref={teamHref} matchHref={matchHref} />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const day = canvas.getByRole("region", {
      name: "Today"
    });
    const slides = within(day).getAllByRole("group", {
      name: /^Match \\d of 3$/
    });
    await expect(slides).toHaveLength(3);
    await expect(within(slides[0]!).getByRole("link", {
      name: /You: Draw/
    })).toHaveAttribute("href", "#/match/B-4");
    const dots = within(canvas.getByRole("group", {
      name: "Slides"
    })).getAllByRole("button");
    await expect(dots.map(d => d.getAttribute("aria-current"))).toEqual(["true", "false", "false"]);
    await userEvent.click(dots[2]!);
    await waitFor(() => expect(dots[2]).toHaveAttribute("aria-current", "true"));
    await noSidewaysScroll(canvasElement);
    await fitsInside(() => slides);
  }
}`,...O.parameters?.docs?.source},description:{story:`Today's matches as slides to swipe (the owner's 28 Oct mockup), each the header and your strip; the dots follow.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  loaders: [changed("knockouts", s => s.now = t("2028-06-22T09:00:00Z"))],
  render: (_, {
    loaded
  }) => <DaySlides day={schedule((loaded as Loaded).s).day!} matchHref={matchHref} />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("heading", {
      name: "Sat 24 Jun"
    })).toBeVisible();
    await expect(canvas.getAllByRole("group", {
      name: /^Match \\d of 2$/
    })).toHaveLength(2);
  }
}`,...k.parameters?.docs?.source},description:{story:`A day without matches: the next day's, named.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  loaders: [changed("morning", s => s.fixtures = s.fixtures.filter(f => !["C-3", "C-4"].includes(f.id)))],
  render: (_, {
    loaded
  }) => <DaySlides day={schedule((loaded as Loaded).s).day!} matchHref={matchHref} />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole("group", {
      name: "Slides"
    })).toBeNull();
  }
}`,...A.parameters?.docs?.source},description:{story:`One match that day: no dots.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => {
    const {
      s
    } = loaded as Loaded;
    const cards = [...schedule(s, {
      side: "past"
    }).cards.slice(0, 2), ...schedule(s).cards.slice(0, 1)];
    return <div className="grid gap-3">
        {cards.map(c => <LittleCard key={c.id} card={c} href={matchHref(c.id)} teamHref={teamHref} />)}
      </div>;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const played = canvas.getByRole("link", {
      name: /^Germany v Poland/
    });
    await expect(played).toHaveAttribute("href", "#/match/C-4");
    const card = played.closest("article")!;
    await expect(card).toHaveTextContent(/FT/);
    await expect(within(card).getByRole("link", {
      name: "Germany"
    })).toHaveAttribute("href", "#/team/DE");
    // Anywhere but a team's name is the match.
    const box = card.getBoundingClientRect();
    await expect(document.elementFromPoint(box.right - 6, box.bottom - 6)?.closest("a")).toBe(played);
    await noSidewaysScroll(canvasElement);
  }
}`,...j.parameters?.docs?.source},description:{story:`The little cards: a played one with its score, one to come; a team's name opens the team, the rest of the card the
match (the stretched link: a link never inside a link).`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  loaders: [changed("morning", s => {
    s.catchUp = {
      seenAt: t("2028-06-14T10:00:00Z"),
      ask: true,
      hidden: {
        fixtures: ["A-3", "A-4", "B-3"],
        revealed: [],
        answered: [],
        until: t("2028-06-15T11:00:00Z")
      }
    };
  })],
  render: (_, {
    loaded
  }) => {
    const card = schedule(spoilerFree((loaded as Loaded).s), {
      side: "past"
    }).cards.find(c => c.id === "A-3")!;
    return <LittleCard card={card} href={matchHref(card.id)} />;
  },
  play: async ({
    canvasElement
  }) => {
    const card = canvasElement.querySelector("article")!;
    await expect(card).not.toHaveTextContent("FT");
    await expect(card.querySelectorAll("[data-goals]")).toHaveLength(0);
  }
}`,...M.parameters?.docs?.source},description:{story:`A match hidden this morning: in the past, no score.`,...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("morning")],
  render: function Render(_, {
    loaded
  }) {
    const {
      s
    } = loaded as Loaded;
    const [side, setSide] = useState<"past" | "upcoming">("upcoming");
    const [round, setRound] = useState<string | undefined>();
    const [order, setOrder] = useState<"asc" | "desc" | undefined>();
    const v = schedule(s, {
      side,
      ...(round && {
        round
      }),
      ...(order && {
        order
      })
    });
    return <div className="grid gap-3">
        <ScheduleControls side={v.side} order={v.order} rounds={v.rounds} {...round && {
        round
      }} onSide={x => {
        sides(x);
        setSide(x);
        setRound(undefined);
        setOrder(undefined);
      }} onOrder={setOrder} onRound={x => setRound(x ?? undefined)} />
        <p data-first="">{v.cards[0]?.id}</p>
      </div>;
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    sides.mockClear();
    await expect(canvas.getByRole("button", {
      name: "Upcoming"
    })).toHaveAttribute("aria-pressed", "true");
    await expect(canvasElement.querySelector("[data-first]")).toHaveTextContent("B-4");
    await userEvent.click(canvas.getByRole("button", {
      name: "Matchday 3"
    }));
    await expect(canvasElement.querySelector("[data-first]")).toHaveTextContent("A-5");
    await userEvent.click(canvas.getByRole("button", {
      name: "Past"
    }));
    await expect(sides).toHaveBeenCalledWith("past");
    await expect(canvasElement.querySelector("[data-first]")).toHaveTextContent("B-3");
    await userEvent.click(canvas.getByRole("button", {
      name: "Date, latest first"
    }));
    await expect(canvasElement.querySelector("[data-first]")).toHaveTextContent("A-1");
    await expect(canvas.getAllByRole("button", {
      name: /^Matchday/
    }).map(b => b.textContent)).toEqual(["Matchday 1", "Matchday 2"]);
    await noSidewaysScroll(canvasElement);
  }
}`,...P.parameters?.docs?.source},description:{story:`Past or Upcoming, the date's order, and the rounds on that side.`,...P.parameters?.docs?.description}}}})))()}I();export{P as Controls,M as HiddenCard,j as LittleCards,k as NextDay,A as OneMatch,O as Today,F as __namedExportsOrder,C as default};