import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./ChampionList-BKvNYqMG.js";import{ht as a,t as o}from"./src-Ca_r4w3v.js";import{a as s,i as c,r as l}from"./checks-C0Y16pbK.js";import{i as u,t as d}from"./moments-Bzx1n_TW.js";function f({champion:e}){let[t,n]=(0,p.useState)(e.yours?.team.id);return(0,m.jsx)(i,{champion:e,...t&&{value:t},onValueChange:n})}var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{o(),p=t(),l(),d(),r(),m=n(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Domain/Champion`,parameters:{layout:`padded`}},v=e=>a(e.s),y={loaders:[u(`eve`)],render:(e,{loaded:t})=>(0,m.jsx)(f,{champion:v(t)}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByRole(`radiogroup`,{name:`Your champion`}),i=g(r).getAllByRole(`radio`);await h(i).toHaveLength(24),await h(e.getByRole(`radio`,{name:/Switzerland/})).toBeChecked(),await h(i[0].closest(`label`)).toHaveTextContent(`Spain`),await h(i[0].closest(`label`)).toHaveTextContent(`Est. 37%`),await h(i[0].closest(`label`)).toHaveTextContent(`162`),await n.click(e.getByText(`Spain`)),await h(e.getByRole(`radio`,{name:/Spain/})).toBeChecked(),await s(i[0].closest(`label`)),await c(t)}},b={loaders:[u(`eve`)],render:(e,{loaded:t})=>{let n=v(t);return(0,m.jsx)(f,{champion:{...n,options:[...n.options,...n.options.map(e=>({...e,team:{...e.team,id:`${e.team.id}2`}}))]}})},play:async({canvas:e,canvasElement:t})=>{await h(e.getAllByRole(`radio`)).toHaveLength(48),await c(t)}},x=[`List`,`FortyEightTeams`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      name: /Switzerland/
    })).toBeChecked();
    await expect(radios[0]!.closest("label")).toHaveTextContent("Spain");
    await expect(radios[0]!.closest("label")).toHaveTextContent("Est. 37%");
    await expect(radios[0]!.closest("label")).toHaveTextContent("162");
    await userEvent.click(canvas.getByText("Spain"));
    await expect(canvas.getByRole("radio", {
      name: /Spain/
    })).toBeChecked();
    await thumbSized(radios[0]!.closest("label")!);
    await noSidewaysScroll(canvasElement);
  }
}`,...y.parameters?.docs?.source},description:{story:`The list to choose from (in Picks, and in onboarding later): every team, chance and points.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`A World Cup's 48 teams (the Euro's 24 twice over, standing in): the list's length, in the one design.`,...b.parameters?.docs?.description}}}})))()}S();export{b as FortyEightTeams,y as List,x as __namedExportsOrder,_ as default};