"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[93089],{2754:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(67294),n=a(52263),r=a(76200),s=a(41916),i=a(39960),m=a(95999);const o=function(e){const{metadata:t}=e,{previousPage:a,nextPage:n}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(i.Z,{className:"pagination-nav__link",to:a},l.createElement("div",{className:"pagination-nav__label"},"\xab"," ",l.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&l.createElement(i.Z,{className:"pagination-nav__link",to:n},l.createElement("div",{className:"pagination-nav__label"},l.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var c=a(53810);const g=function(e){const{metadata:t,items:a,sidebar:i}=e,{siteConfig:{title:m}}=(0,n.Z)(),{blogDescription:g,blogTitle:d,permalink:p}=t,u="/"===p?m:d;return l.createElement(r.Z,{title:u,description:g,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:i},a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(o,{metadata:t}))}},86753:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),n=a(95999),r=a(87462),s=a(86010);const i="iconEdit_mS5F";const m=function(e){let{className:t,...a}=e;return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var o=a(53810);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},l.createElement(m,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),n=a(86010),r=a(39960);const s="tag_WK-t",i="tagRegular_LXbV",m="tagWithCount_S5Zl";const o=function(e){const{permalink:t,name:a,count:o}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,{[i]:!o,[m]:o})},a,o&&l.createElement("span",null,o))}},20062:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),n=a(86010),r=a(95999),s=a(7774);const i="tags_NBRY",m="tag_F03v";function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:m},l.createElement(s.Z,{name:t,permalink:a}))}))))}},76200:(e,t,a)=>{a.d(t,{Z:()=>b});var l=a(67294),n=a(86010),r=a(92582),s=a(39960);const i="sidebar_q+wC",m="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",c="sidebarItem_cjdF",g="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs";var p=a(95999);function u(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))))))}const b=function(e){const{sidebar:t,toc:a,children:s,...i}=e,m=t&&t.items.length>0,o="blog-list-page"===e.pageClassName,c="blog-tags-post-list-page"===e.pageClassName;return l.createElement(r.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(u,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-2":!m,row:o||c,"tags-post-list":c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},41916:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(67294),n=a(86010),r=a(3905),s=a(95999),i=a(39960),m=a(44996),o=a(53810),c=a(67707),g=a(86753);const d={blogPostTitle:"blogPostTitle_RC3s",blogPostPageTitle:"blogPostPageTitle_bKZt",blogPostPageTile:"blogPostPageTile_BsLs",blogPostData:"blogPostData_A2Le",blogpostReadingTime:"blogpostReadingTime_Mwxf",tagsWrapperPostPage:"tagsWrapperPostPage_VdId",blogPostDetailsFull:"blogPostDetailsFull_2lop","blog-list-page":"blog-list-page_Jl5M",container:"container_EXwA",row:"row_DZ33",authorsList:"authorsList_svFt",authorsListLong:"authorsListLong_kl47",authorTimeTags:"authorTimeTags_oN88",tag:"tag_MgfY",tagPostPage:"tagPostPage_gnvv",postHeader:"postHeader_Ipb1",greyLink:"greyLink_9KrM",blogPostText:"blogPostText_jBA8",blogInfo:"blogInfo_1FPd",blogPostAuthorsList:"blogPostAuthorsList_dlEG"};a(20062);var p=a(7774);const u=function(e){const t=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,m.C)(),{children:u,frontMatter:b,assets:E,metadata:h,truncated:P,isBlogPostPage:v=!1}=e,{date:N,formattedDate:_,permalink:T,tags:Z,readingTime:f,title:k,editUrl:w,authors:L}=h,y=E.image??b.image??"/assets/images/hudi-logo-medium.png",F=Z.length>0;return l.createElement("article",{className:(0,n.Z)({"blog-list-item":!v}),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=v?"h1":"h2";return l.createElement("header",{className:d.postHeader},l.createElement("div",null,!v&&y&&l.createElement("div",{className:"col blogThumbnail",itemProp:"blogThumbnail"},l.createElement(i.Z,{itemProp:"url",to:T},l.createElement("img",{src:a(y,{absolute:!0}),className:"blog-image"}))),l.createElement(e,{className:d.blogPostTitle,itemProp:"headline"},v?l.createElement(e,{className:d.blogPostPageTitle,itemProp:"headline"},k):l.createElement(i.Z,{itemProp:"url",to:T},l.createElement(e,{className:d.blogPostTitle,itemProp:"headline"},k))),l.createElement("div",{className:(0,n.Z)(d.blogInfo,"margin-top--sm margin-bottom--sm")},0===L.length?l.createElement("div",{className:(0,n.Z)(d.authorTimeTags,"row 'margin-vert--md'")},l.createElement("time",{dateTime:N,itemProp:"datePublished"},_)):l.createElement(l.Fragment,null,v?l.createElement("div",{className:(0,n.Z)(d.blogPostText,"row")},l.createElement("time",{dateTime:N,itemProp:"datePublished"},_),L.map(((e,t)=>l.createElement("div",{key:t},l.createElement("div",{className:"avatar"},e.name&&l.createElement("div",null,l.createElement(l.Fragment,null,0!==t?t!==L.length-1?",":"and":""),l.createElement(i.Z,{href:e.url,itemProp:"url"},l.createElement("span",{className:(0,n.Z)(d.blogPostAuthorsList),itemProp:"name"},e.name)))))))):l.createElement("div",{className:(0,n.Z)(d.authorTimeTags,"row 'margin-vert--md'")},l.createElement("time",{dateTime:N,itemProp:"datePublished"},_," by"),L.map(((e,t)=>l.createElement("div",{key:t},l.createElement("div",{className:"avatar"},e.name&&l.createElement("div",null,l.createElement(l.Fragment,null,0!==t?t!==L.length-1?",":"and":""),l.createElement(i.Z,{href:e.url,itemProp:"url"},l.createElement("span",{className:(0,n.Z)(d.authorsList),itemProp:"name"},e.name))))))))),v&&f&&l.createElement("div",{className:(0,n.Z)(d.blogPostData,{[d.blogpostReadingTime]:!v})},l.createElement(l.Fragment,null,void 0!==f&&l.createElement(l.Fragment,null,t(f)))))),!!Z.length&&l.createElement(l.Fragment,null,l.createElement("ul",{className:(0,n.Z)(d.tags,d.authorTimeTags,"padding--none","margin-left--sm",{[d.tagsWrapperPostPage]:v})},Z.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:(0,n.Z)(d.tag,{[d.tagPostPage]:v})},l.createElement(p.Z,{className:(0,n.Z)(d.greyLink),name:t,permalink:a}))})))))})(),v&&l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:c.Z},u)),(F||P)&&v&&w&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",{[d.blogPostDetailsFull]:v})},l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.Z,{editUrl:w}))))}}}]);