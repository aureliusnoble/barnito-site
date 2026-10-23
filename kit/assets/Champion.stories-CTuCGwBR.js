import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r,v as i}from"./src-Ckdztxlk.js";import{a,i as o,r as s}from"./checks-CKr9wmxM.js";import{i as c,t as l}from"./moments-Cjxlj8DI.js";import{n as u,t as d}from"./check-CbMf6dBo.js";import{r as f,t as p}from"./Flag-BoI2ifrp.js";function m({champion:e,value:t,onValueChange:n}){return(0,h.jsx)(`div`,{role:`radiogroup`,"aria-label":`Your champion`,className:`grid grid-cols-1 gap-1`,children:e.options.map(({team:e,option:r})=>{let i=e.id===t;return(0,h.jsxs)(`label`,{className:`flex min-h-target min-w-0 cursor-pointer items-center gap-3 rounded-tile px-2 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand-fg ${i?`bg-mine-soft ring-2 ring-line-strong ring-inset`:``}`,children:[(0,h.jsx)(`input`,{type:`radio`,name:`champion`,className:`sr-only`,checked:i,onChange:()=>n(e.id)}),(0,h.jsx)(p,{code:e.flag,size:24,alt:``}),(0,h.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-body font-semibold`,children:e.name}),i&&(0,h.jsx)(d,{"aria-hidden":!0,size:16,strokeWidth:2.5,className:`shrink-0`}),r.chance!==void 0&&(0,h.jsxs)(`span`,{className:`w-16 shrink-0 text-right font-num text-label text-fg-muted`,children:[`Est. `,g(r.chance)]}),(0,h.jsxs)(`span`,{className:`w-16 shrink-0 text-right`,children:[(0,h.jsx)(`span`,{className:`font-num text-body font-bold`,children:r.points??`–`}),` `,(0,h.jsx)(`span`,{className:`text-label font-semibold text-fg-muted`,children:`pts`})]})]},e.id)})})}var h,g;function _(){return(_=e((()=>{u(),f(),h=n(),g=e=>`${Math.round(e*100)}%`,m.__docgenInfo={description:`Every team to choose your champion from (in Picks; onboarding later): its chance and points, the same two numbers in
    the same places as every option (principle 2); the chosen one on lime with a tick.`,methods:[],displayName:`ChampionList`,props:{champion:{required:!0,tsType:{name:`ChampionView`},description:``},value:{required:!1,tsType:{name:`TeamId`},description:``},onValueChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(team: TeamId) => void`,signature:{arguments:[{type:{name:`TeamId`},name:`team`}],return:{name:`void`}}},description:``}}}})))()}function v({champion:e}){let[t,n]=(0,y.useState)(e.yours?.team.id);return(0,b.jsx)(m,{champion:e,...t&&{value:t},onValueChange:n})}var y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{r(),y=t(),s(),l(),_(),b=n(),{expect:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Domain/Champion`,parameters:{layout:`padded`}},w=e=>i(e.s),T={loaders:[c(`eve`)],render:(e,{loaded:t})=>(0,b.jsx)(v,{champion:w(t)}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByRole(`radiogroup`,{name:`Your champion`}),i=S(r).getAllByRole(`radio`);await x(i).toHaveLength(24),await x(e.getByRole(`radio`,{name:/Croatia/})).toBeChecked(),await x(i[0].closest(`label`)).toHaveTextContent(`Spain`),await x(i[0].closest(`label`)).toHaveTextContent(`Est. 35%`),await x(i[0].closest(`label`)).toHaveTextContent(`171`),await n.click(e.getByText(`Spain`)),await x(e.getByRole(`radio`,{name:/Spain/})).toBeChecked(),await a(i[0].closest(`label`)),await o(t)}},E={loaders:[c(`eve`)],render:(e,{loaded:t})=>{let n=w(t);return(0,b.jsx)(v,{champion:{...n,options:[...n.options,...n.options.map(e=>({...e,team:{...e.team,id:`${e.team.id}2`}}))]}})},play:async({canvas:e,canvasElement:t})=>{await x(e.getAllByRole(`radio`)).toHaveLength(48),await o(t)}},D=[`List`,`FortyEightTeams`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => <Choose champion={view(loaded)} />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const group = canvas.getByRole("radiogroup", {
      name: "Your champion"
    });
    const radios = within(group).getAllByRole("radio");
    await expect(radios).toHaveLength(24);
    await expect(canvas.getByRole("radio", {
      name: /Croatia/
    })).toBeChecked();
    await expect(radios[0]!.closest("label")).toHaveTextContent("Spain");
    await expect(radios[0]!.closest("label")).toHaveTextContent("Est. 35%");
    await expect(radios[0]!.closest("label")).toHaveTextContent("171");
    await userEvent.click(canvas.getByText("Spain"));
    await expect(canvas.getByRole("radio", {
      name: /Spain/
    })).toBeChecked();
    await thumbSized(radios[0]!.closest("label")!);
    await noSidewaysScroll(canvasElement);
  }
}`,...T.parameters?.docs?.source},description:{story:`The list to choose from (in Picks, and in onboarding later): every team, chance and points.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("eve")],
  render: (_, {
    loaded
  }) => {
    const c = view(loaded);
    return <Choose champion={{
      ...c,
      options: [...c.options, ...c.options.map(o => ({
        ...o,
        team: {
          ...o.team,
          id: \`\${o.team.id}2\`
        }
      }))]
    }} />;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getAllByRole("radio")).toHaveLength(48);
    await noSidewaysScroll(canvasElement);
  }
}`,...E.parameters?.docs?.source},description:{story:`A World Cup's 48 teams (the Euro's 24 twice over, standing in): the list's length, in the one design.`,...E.parameters?.docs?.description}}}})))()}O();export{E as FortyEightTeams,T as List,D as __namedExportsOrder,C as default};