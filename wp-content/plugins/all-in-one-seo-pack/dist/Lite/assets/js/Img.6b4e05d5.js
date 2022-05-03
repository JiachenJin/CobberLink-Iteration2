import{V as p,n as f}from"./vueComponentNormalizer.87056a83.js";import{a as n}from"./index.0f8634bc.js";import{b as c,i as l,z as m,p as _}from"./helpers.a4115088.js";import{d as w}from"./index.02c35f2a.js";const I=()=>{let t=0;return c()&&(t=parseInt(document.getElementById("post_author_override").value)),l()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("author")),t},b=()=>{const t=document.querySelector("#set-post-thumbnail img");return t?t.getAttribute("src"):""},d=async(t=!1)=>{const e=window.wp.data.select("core/editor"),s=t?e.getEditedPostAttribute("featured_media"):e.getCurrentPost().featured_media;return typeof s=="undefined"?new Promise(a=>setTimeout(()=>a(d(t)),1e3)):s},h=async()=>{if(c())return b();if(l()){const t=await d(!0).then(e=>e);return isNaN(t)||t===0?"":await n.dispatch("getMediaData",{mediaId:t}).then(e=>e.source_url)}return""},E={data(){return{excludedTermOptions:["featured","attach","content","author","auto"],excludedAttachmentOptions:["featured","content","author"],excludedPageBuilderOptions:["auto"]}},computed:{imageSourceOptions(){return[{label:"Default Image (Set Below)",value:"default"},{label:"Featured Image",value:"featured"},{label:"Attached Image",value:"attach"},{label:"First Image in Content",value:"content"},{label:"Image from Custom Field",value:"custom"},{label:"Post Author Image",value:"author"},{label:"First Available Image",value:"auto"}]},imageSourceOptionsFiltered(){const t=this.imageSourceOptions.map(e=>(e.value==="default"&&(e.label="Default Image Source (Set in Social Networks)"),e)).concat({label:"Custom Image",value:"custom_image"});return this.currentPost.context==="term"?t.filter(e=>!this.excludedTermOptions.includes(e.value)):this.currentPost.context==="post"&&this.currentPost.postType==="attachment"?t.filter(e=>!this.excludedAttachmentOptions.includes(e.value)):this.$aioseo.integration?(this.$aioseo.integration==="seedprod"&&this.excludedPageBuilderOptions.push("featured","custom"),t.filter(e=>!this.excludedPageBuilderOptions.includes(e.value))):t}},methods:{getTermImageSourceOptions(){return this.imageSourceOptions.filter(t=>!this.excludedTermOptions.includes(t.value))},getImageSourceOption(t){return this.imageSourceOptions.find(e=>e.value===t)},getImageSourceOptionFiltered(t){return this.imageSourceOptionsFiltered.find(e=>e.value===t)}}},g=()=>{let t=null;const e=/<img.*?src=['"](.*?)['"].*?>/i.exec(_());return e&&e[1]&&(t=e[1]),t},v=async(t,e,s)=>{let a=m(t[`${s}image_custom_fields`]);return a||await h().then(i=>{a=i}),a||await n.dispatch("getFirstAttachedImage",{postId:t.id}).then(i=>{a=i}),a||(a=g()),a||(a=globalThis.options.social[e].homePage.image),a},S=()=>{const t=I(),e=p.prototype.$aioseo.user.siteAuthors.find(s=>t===s.id);if(e&&e.gravatar){const s=new URL(e.gravatar);return`${s.origin+s.pathname}.jpg${s.search}`}return""},C={data(){return{imageUrl:"",loading:!1}},async mounted(){await this.setImageUrl()},methods:{async setImageUrl(){const t=this.currentPost,e=t.tabs.tab_social,s=e==="facebook"||e==="twitter"&&t.twitter_use_og?"og_":"twitter_";let a=t[`${s}image_type`]||"default";switch(a==="default"&&(a=this.options.social[e].general.defaultImageSourcePosts),this.imageUrl="",a){case"featured":this.loading=!0,await h().then(i=>{this.imageUrl=i,this.loading=!1});break;case"attach":this.loading=!0,await n.dispatch("getFirstAttachedImage",{postId:t.id}).then(i=>{this.imageUrl=i,this.loading=!1});break;case"content":this.imageUrl=g();break;case"author":this.imageUrl=S();break;case"auto":this.loading=!0,await v(t,e,s).then(i=>{this.imageUrl=i,this.loading=!1});break;case"custom":this.imageUrl=m(t[`${s}image_custom_fields`]);break;case"custom_image":this.imageUrl=t[`${s}image_custom_url`];break;case"default":default:this.imageUrl=this.options.social[e].general.defaultImagePosts;break}}}},B={data(){return{customUploader:{}}},methods:{openUploadModal(t,e){const s=()=>{const a=this.customUploader[t].state().get("selection").first().toJSON();e(a.url)};if(this.customUploader[t]){this.customUploader[t].open();return}this.customUploader[t]=window.wp.media({title:"Choose Image",button:{text:"Choose Image"},multiple:!1}),this.customUploader[t].on("select",s),this.customUploader[t].open()}}};var y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.canShow?s("img",{attrs:{src:t.src}}):t._e()},U=[];const P={props:{src:String,tag:{type:String,default(){return"img"}},debounce:{type:Boolean,default(){return!0}}},data(){return{canShow:!1,images:{}}},watch:{src(){if(this.debounce){w(this.maybeShowImage,50);return}this.maybeShowImage()},canShow(t){this.$emit("can-show",t)},images:{handler:function(){this.$emit("images",this.images)},deep:!0}},methods:{async maybeShowImage(){if(this.canShow=!1,!this.src)return;let t=null;try{t=new URL(this.src)}catch{return}const e=/\.(jpg|jpeg|png|gif|svg|webp)$/;if(!t.pathname.replace("/","\\/").match(e))return;if(this.images[this.src]){this.canShow=!0;return}const a=new Image;a.onload=await(()=>{this.canShow=!0;let i=0;const r=a.width,o=a.height;r&&o&&(i=r/o),!this.images[this.src]&&this.$set(this.images,this.src,{image:a,ratio:i,vertical:1.5>i||2<i||600>r||315>o})}),a.onerror=await(()=>{this.canShow=!1}),a.src=this.src}},mounted(){this.maybeShowImage()}},u={};var x=f(P,y,U,!1,O,null,null,null);function O(t){for(let e in u)this[e]=u[e]}var T=function(){return x.exports}();export{T as B,E as I,B as U,C as a};
