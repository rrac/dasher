import * as R from 'ramda'

const SET = 'set'
const OVER = 'over'

export const set = lens => ({
  as: value => [lens, R.always(value), SET],
  with: setter => [lens, setter, SET],
  using: setter => [lens, setter, OVER] 
})


export const makeReducer = handlers => {
  return (state, action) => {
    const { type, ...rest } = action

    if (!R.has(type, handlers)) {
      return state
    }
  
    return handlers[type]
      .reduce((s, [lens, setter, method]) => R[method](lens, setter(rest, s), s), state)
  }
}

export const assignChildLens = lens => Object.assign(lens, {
  ids: R.compose(lens, R.lensProp('ids')),
  data: R.compose(lens, R.lensProp('data')),
  loading: R.compose(lens, R.lensProp('loading'))
})

export const createSliceFor = key => (_, state) => R.merge(
  state,
  { [key]: {
    ids: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    data: {
      1: {
        title: 'Dummy Title #1',
        subtitle: 'Dummy subtitle #1',
        text: `
        Bacon ipsum dolor amet venison turducken ribeye bresaola corned beef. Tail tongue jowl ground round strip steak, drumstick beef ribs fatback brisket. Ribeye picanha jerky frankfurter cow, andouille turkey shankle filet mignon shank kielbasa pancetta tenderloin. Bresaola turducken meatball t-bone andouille cupim. Doner hamburger kevin ham, rump ribeye pancetta strip steak. Chicken tri-tip flank pig, cupim short loin frankfurter. Tenderloin andouille t-bone shoulder kevin sirloin shankle chicken bacon swine sausage shank.
        
        Chuck beef ribs pork, ball tip biltong flank hamburger tri-tip filet mignon. Flank corned beef meatball pork loin chicken ham. Shank doner turkey chicken bresaola ribeye filet mignon pork chuck pig beef shoulder. Pastrami tri-tip pork chop, ham hock brisket meatball filet mignon t-bone drumstick boudin prosciutto pork belly.
        
        Pork belly turducken short ribs chicken prosciutto, venison meatball spare ribs pancetta shoulder flank tail pig. Turkey meatloaf ribeye fatback biltong. Capicola salami rump doner bresaola shoulder. Frankfurter sausage pork, pastrami chicken meatball cupim bresaola hamburger. Short ribs tenderloin porchetta ball tip shank. Porchetta pork chop hamburger shank andouille ball tip. Porchetta brisket ribeye filet mignon prosciutto tail beef ribs, chicken landjaeger shank short ribs salami kielbasa doner pancetta.
        `
      },
      2: {
        title: 'Dummy Title #2',
        subtitle: 'Dummy subtitle #2',
        text: `
        Bacon ipsum dolor amet venison turducken ribeye bresaola corned beef. Tail tongue jowl ground round strip steak, drumstick beef ribs fatback brisket. Ribeye picanha jerky frankfurter cow, andouille turkey shankle filet mignon shank kielbasa pancetta tenderloin. Bresaola turducken meatball t-bone andouille cupim. Doner hamburger kevin ham, rump ribeye pancetta strip steak. Chicken tri-tip flank pig, cupim short loin frankfurter. Tenderloin andouille t-bone shoulder kevin sirloin shankle chicken bacon swine sausage shank.
        
        Chuck beef ribs pork, ball tip biltong flank hamburger tri-tip filet mignon. Flank corned beef meatball pork loin chicken ham. Shank doner turkey chicken bresaola ribeye filet mignon pork chuck pig beef shoulder. Pastrami tri-tip pork chop, ham hock brisket meatball filet mignon t-bone drumstick boudin prosciutto pork belly.
        
        Pork belly turducken short ribs chicken prosciutto, venison meatball spare ribs pancetta shoulder flank tail pig. Turkey meatloaf ribeye fatback biltong. Capicola salami rump doner bresaola shoulder. Frankfurter sausage pork, pastrami chicken meatball cupim bresaola hamburger. Short ribs tenderloin porchetta ball tip shank. Porchetta pork chop hamburger shank andouille ball tip. Porchetta brisket ribeye filet mignon prosciutto tail beef ribs, chicken landjaeger shank short ribs salami kielbasa doner pancetta.
        `
      },
      3: {
        title: 'Dummy Title #3',
        subtitle: 'Dummy subtitle #3',
        text: `
        Bacon ipsum dolor amet venison turducken ribeye bresaola corned beef. Tail tongue jowl ground round strip steak, drumstick beef ribs fatback brisket. Ribeye picanha jerky frankfurter cow, andouille turkey shankle filet mignon shank kielbasa pancetta tenderloin. Bresaola turducken meatball t-bone andouille cupim. Doner hamburger kevin ham, rump ribeye pancetta strip steak. Chicken tri-tip flank pig, cupim short loin frankfurter. Tenderloin andouille t-bone shoulder kevin sirloin shankle chicken bacon swine sausage shank.
        
        Chuck beef ribs pork, ball tip biltong flank hamburger tri-tip filet mignon. Flank corned beef meatball pork loin chicken ham. Shank doner turkey chicken bresaola ribeye filet mignon pork chuck pig beef shoulder. Pastrami tri-tip pork chop, ham hock brisket meatball filet mignon t-bone drumstick boudin prosciutto pork belly.
        
        Pork belly turducken short ribs chicken prosciutto, venison meatball spare ribs pancetta shoulder flank tail pig. Turkey meatloaf ribeye fatback biltong. Capicola salami rump doner bresaola shoulder. Frankfurter sausage pork, pastrami chicken meatball cupim bresaola hamburger. Short ribs tenderloin porchetta ball tip shank. Porchetta pork chop hamburger shank andouille ball tip. Porchetta brisket ribeye filet mignon prosciutto tail beef ribs, chicken landjaeger shank short ribs salami kielbasa doner pancetta.
        `
      },
      4: {
        title: 'Dummy Title #4',
        subtitle: 'Dummy subtitle #4',
        text: `
        Bacon ipsum dolor amet venison turducken ribeye bresaola corned beef. Tail tongue jowl ground round strip steak, drumstick beef ribs fatback brisket. Ribeye picanha jerky frankfurter cow, andouille turkey shankle filet mignon shank kielbasa pancetta tenderloin. Bresaola turducken meatball t-bone andouille cupim. Doner hamburger kevin ham, rump ribeye pancetta strip steak. Chicken tri-tip flank pig, cupim short loin frankfurter. Tenderloin andouille t-bone shoulder kevin sirloin shankle chicken bacon swine sausage shank.
        
        Chuck beef ribs pork, ball tip biltong flank hamburger tri-tip filet mignon. Flank corned beef meatball pork loin chicken ham. Shank doner turkey chicken bresaola ribeye filet mignon pork chuck pig beef shoulder. Pastrami tri-tip pork chop, ham hock brisket meatball filet mignon t-bone drumstick boudin prosciutto pork belly.
        
        Pork belly turducken short ribs chicken prosciutto, venison meatball spare ribs pancetta shoulder flank tail pig. Turkey meatloaf ribeye fatback biltong. Capicola salami rump doner bresaola shoulder. Frankfurter sausage pork, pastrami chicken meatball cupim bresaola hamburger. Short ribs tenderloin porchetta ball tip shank. Porchetta pork chop hamburger shank andouille ball tip. Porchetta brisket ribeye filet mignon prosciutto tail beef ribs, chicken landjaeger shank short ribs salami kielbasa doner pancetta.
        `
      },
      5: {
        title: 'Dummy Title #5',
        subtitle: 'Dummy subtitle #5',
        text: `
        Bacon ipsum dolor amet venison turducken ribeye bresaola corned beef. Tail tongue jowl ground round strip steak, drumstick beef ribs fatback brisket. Ribeye picanha jerky frankfurter cow, andouille turkey shankle filet mignon shank kielbasa pancetta tenderloin. Bresaola turducken meatball t-bone andouille cupim. Doner hamburger kevin ham, rump ribeye pancetta strip steak. Chicken tri-tip flank pig, cupim short loin frankfurter. Tenderloin andouille t-bone shoulder kevin sirloin shankle chicken bacon swine sausage shank.
        
        Chuck beef ribs pork, ball tip biltong flank hamburger tri-tip filet mignon. Flank corned beef meatball pork loin chicken ham. Shank doner turkey chicken bresaola ribeye filet mignon pork chuck pig beef shoulder. Pastrami tri-tip pork chop, ham hock brisket meatball filet mignon t-bone drumstick boudin prosciutto pork belly.
        
        Pork belly turducken short ribs chicken prosciutto, venison meatball spare ribs pancetta shoulder flank tail pig. Turkey meatloaf ribeye fatback biltong. Capicola salami rump doner bresaola shoulder. Frankfurter sausage pork, pastrami chicken meatball cupim bresaola hamburger. Short ribs tenderloin porchetta ball tip shank. Porchetta pork chop hamburger shank andouille ball tip. Porchetta brisket ribeye filet mignon prosciutto tail beef ribs, chicken landjaeger shank short ribs salami kielbasa doner pancetta.
        `
      },
      6: {
        title: 'Dummy Title #6',
        subtitle: 'Dummy subtitle #6',
        text: `
        Bacon ipsum dolor amet venison turducken ribeye bresaola corned beef. Tail tongue jowl ground round strip steak, drumstick beef ribs fatback brisket. Ribeye picanha jerky frankfurter cow, andouille turkey shankle filet mignon shank kielbasa pancetta tenderloin. Bresaola turducken meatball t-bone andouille cupim. Doner hamburger kevin ham, rump ribeye pancetta strip steak. Chicken tri-tip flank pig, cupim short loin frankfurter. Tenderloin andouille t-bone shoulder kevin sirloin shankle chicken bacon swine sausage shank.
        
        Chuck beef ribs pork, ball tip biltong flank hamburger tri-tip filet mignon. Flank corned beef meatball pork loin chicken ham. Shank doner turkey chicken bresaola ribeye filet mignon pork chuck pig beef shoulder. Pastrami tri-tip pork chop, ham hock brisket meatball filet mignon t-bone drumstick boudin prosciutto pork belly.
        
        Pork belly turducken short ribs chicken prosciutto, venison meatball spare ribs pancetta shoulder flank tail pig. Turkey meatloaf ribeye fatback biltong. Capicola salami rump doner bresaola shoulder. Frankfurter sausage pork, pastrami chicken meatball cupim bresaola hamburger. Short ribs tenderloin porchetta ball tip shank. Porchetta pork chop hamburger shank andouille ball tip. Porchetta brisket ribeye filet mignon prosciutto tail beef ribs, chicken landjaeger shank short ribs salami kielbasa doner pancetta.
        `
      },
      7: {
        title: 'Dummy Title #7',
        subtitle: 'Dummy subtitle #7',
        text: `
        Bacon ipsum dolor amet venison turducken ribeye bresaola corned beef. Tail tongue jowl ground round strip steak, drumstick beef ribs fatback brisket. Ribeye picanha jerky frankfurter cow, andouille turkey shankle filet mignon shank kielbasa pancetta tenderloin. Bresaola turducken meatball t-bone andouille cupim. Doner hamburger kevin ham, rump ribeye pancetta strip steak. Chicken tri-tip flank pig, cupim short loin frankfurter. Tenderloin andouille t-bone shoulder kevin sirloin shankle chicken bacon swine sausage shank.
        
        Chuck beef ribs pork, ball tip biltong flank hamburger tri-tip filet mignon. Flank corned beef meatball pork loin chicken ham. Shank doner turkey chicken bresaola ribeye filet mignon pork chuck pig beef shoulder. Pastrami tri-tip pork chop, ham hock brisket meatball filet mignon t-bone drumstick boudin prosciutto pork belly.
        
        Pork belly turducken short ribs chicken prosciutto, venison meatball spare ribs pancetta shoulder flank tail pig. Turkey meatloaf ribeye fatback biltong. Capicola salami rump doner bresaola shoulder. Frankfurter sausage pork, pastrami chicken meatball cupim bresaola hamburger. Short ribs tenderloin porchetta ball tip shank. Porchetta pork chop hamburger shank andouille ball tip. Porchetta brisket ribeye filet mignon prosciutto tail beef ribs, chicken landjaeger shank short ribs salami kielbasa doner pancetta.
        `
      },
      8: {
        title: 'Dummy Title #8',
        subtitle: 'Dummy subtitle #8',
        text: `
        Bacon ipsum dolor amet venison turducken ribeye bresaola corned beef. Tail tongue jowl ground round strip steak, drumstick beef ribs fatback brisket. Ribeye picanha jerky frankfurter cow, andouille turkey shankle filet mignon shank kielbasa pancetta tenderloin. Bresaola turducken meatball t-bone andouille cupim. Doner hamburger kevin ham, rump ribeye pancetta strip steak. Chicken tri-tip flank pig, cupim short loin frankfurter. Tenderloin andouille t-bone shoulder kevin sirloin shankle chicken bacon swine sausage shank.
        
        Chuck beef ribs pork, ball tip biltong flank hamburger tri-tip filet mignon. Flank corned beef meatball pork loin chicken ham. Shank doner turkey chicken bresaola ribeye filet mignon pork chuck pig beef shoulder. Pastrami tri-tip pork chop, ham hock brisket meatball filet mignon t-bone drumstick boudin prosciutto pork belly.
        
        Pork belly turducken short ribs chicken prosciutto, venison meatball spare ribs pancetta shoulder flank tail pig. Turkey meatloaf ribeye fatback biltong. Capicola salami rump doner bresaola shoulder. Frankfurter sausage pork, pastrami chicken meatball cupim bresaola hamburger. Short ribs tenderloin porchetta ball tip shank. Porchetta pork chop hamburger shank andouille ball tip. Porchetta brisket ribeye filet mignon prosciutto tail beef ribs, chicken landjaeger shank short ribs salami kielbasa doner pancetta.
        `
      },
      9: {
        title: 'Dummy Title #19',
        subtitle: 'Dummy subtitle #9',
        text: `
        Bacon ipsum dolor amet venison turducken ribeye bresaola corned beef. Tail tongue jowl ground round strip steak, drumstick beef ribs fatback brisket. Ribeye picanha jerky frankfurter cow, andouille turkey shankle filet mignon shank kielbasa pancetta tenderloin. Bresaola turducken meatball t-bone andouille cupim. Doner hamburger kevin ham, rump ribeye pancetta strip steak. Chicken tri-tip flank pig, cupim short loin frankfurter. Tenderloin andouille t-bone shoulder kevin sirloin shankle chicken bacon swine sausage shank.
        
        Chuck beef ribs pork, ball tip biltong flank hamburger tri-tip filet mignon. Flank corned beef meatball pork loin chicken ham. Shank doner turkey chicken bresaola ribeye filet mignon pork chuck pig beef shoulder. Pastrami tri-tip pork chop, ham hock brisket meatball filet mignon t-bone drumstick boudin prosciutto pork belly.
        
        Pork belly turducken short ribs chicken prosciutto, venison meatball spare ribs pancetta shoulder flank tail pig. Turkey meatloaf ribeye fatback biltong. Capicola salami rump doner bresaola shoulder. Frankfurter sausage pork, pastrami chicken meatball cupim bresaola hamburger. Short ribs tenderloin porchetta ball tip shank. Porchetta pork chop hamburger shank andouille ball tip. Porchetta brisket ribeye filet mignon prosciutto tail beef ribs, chicken landjaeger shank short ribs salami kielbasa doner pancetta.
        `
      },
      10: {
        title: 'Dummy Title #10',
        subtitle: 'Dummy subtitle #10',
        text: `
        Bacon ipsum dolor amet venison turducken ribeye bresaola corned beef. Tail tongue jowl ground round strip steak, drumstick beef ribs fatback brisket. Ribeye picanha jerky frankfurter cow, andouille turkey shankle filet mignon shank kielbasa pancetta tenderloin. Bresaola turducken meatball t-bone andouille cupim. Doner hamburger kevin ham, rump ribeye pancetta strip steak. Chicken tri-tip flank pig, cupim short loin frankfurter. Tenderloin andouille t-bone shoulder kevin sirloin shankle chicken bacon swine sausage shank.
        
        Chuck beef ribs pork, ball tip biltong flank hamburger tri-tip filet mignon. Flank corned beef meatball pork loin chicken ham. Shank doner turkey chicken bresaola ribeye filet mignon pork chuck pig beef shoulder. Pastrami tri-tip pork chop, ham hock brisket meatball filet mignon t-bone drumstick boudin prosciutto pork belly.
        
        Pork belly turducken short ribs chicken prosciutto, venison meatball spare ribs pancetta shoulder flank tail pig. Turkey meatloaf ribeye fatback biltong. Capicola salami rump doner bresaola shoulder. Frankfurter sausage pork, pastrami chicken meatball cupim bresaola hamburger. Short ribs tenderloin porchetta ball tip shank. Porchetta pork chop hamburger shank andouille ball tip. Porchetta brisket ribeye filet mignon prosciutto tail beef ribs, chicken landjaeger shank short ribs salami kielbasa doner pancetta.
        `
      }
    },
    loading: true,
  }}
)

export const makeBasicLens = R.compose(
  assignChildLens,
  R.lensProp
)