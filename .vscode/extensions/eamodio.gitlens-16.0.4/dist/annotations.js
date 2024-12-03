exports.id=459,exports.ids=[459],exports.modules={1139:(e,t,r)=>{r.d(t,{z:()=>BlameAnnotationProviderBase});var o=r(1398),n=r(2950),i=r(9674),a=r(3656),s=r(216),l=r(8414),u=r(6725),h=Object.defineProperty,c=Object.getOwnPropertyDescriptor;let d=0x40000000-1;let BlameAnnotationProviderBase=class BlameAnnotationProviderBase extends l.w{blame;hoverProviderDisposable;constructor(e,t,r,o,n){super(e,t,r,o,n),this.blame=e.git.getBlame(this.trackedDocument.uri,o.document),o.document.isDirty&&n.setForceDirtyStateChangeOnNextDocumentChange()}clear(){return null!=this.hoverProviderDisposable&&(this.hoverProviderDisposable.dispose(),this.hoverProviderDisposable=void 0),super.clear()}async validate(){let e=await this.blame;return!!e?.lines.length}async getBlame(e){e&&(this.blame=this.container.git.getBlame(this.trackedDocument.uri,this.editor.document));let t=await this.blame;if(t?.lines.length)return t}getComputedHeatmap(e){let t,r,o;let n=[];for(let o of e.lines)r!==o.sha&&(r=o.sha,null!=(t=e.commits.get(o.sha))&&n.push(t.date));n.sort((e,t)=>e.getTime()-t.getTime());let i=new Date;i.setDate(i.getDate()-(s.H.get("heatmap.ageThreshold")||90));let a=i.getTime(),l=[],h=[];for(let e of n)e.getTime()<a?h.push(e):l.push(e);o=l.length&&h.length?{hot:p(l),cold:p(h)}:p(n);let c=(e,t)=>Array.isArray(o)?o:t?o.hot.concat(o.cold):e.getTime()<a?o.cold:o.hot,d=(e,t)=>{let r=e.getTime(),o=0;for(let e=0;e<t.length&&(o=e,!(r>=t[e]));e++);return o};return{coldThresholdTimestamp:a,colors:(0,u.v7)(),computeRelativeAge:e=>d(e,c(e)),computeOpacity:e=>{let t=c(e,!0);return Math.max(.2,Math.round((1-d(e,t)/t.length)*100)/100)}}}registerHoverProviders(e){let t=s.H.get("hovers");t.enabled&&t.annotations.enabled&&(e.details||e.changes)&&(this.hoverProviderDisposable?.dispose(),this.hoverProviderDisposable=o.languages.registerHoverProvider({pattern:this.editor.document.uri.fsPath},{provideHover:(t,r,o)=>this.provideHover(e,t,r,o)}))}async provideHover(e,t,r,a){if("line"!==s.H.get("hovers.annotations.over")&&0!==r.character||this.editor.document.uri.toString()!==t.uri.toString())return;let l=await this.getBlame();if(null==l)return;let u=l.lines[r.line],h=l.commits.get(u.sha);if(null==h)return;let c=(await Promise.all([e.details?this.getDetailsHoverMessage(h,t):void 0,e.changes?(0,i.PV)(this.container,h,await n.nk.fromUri(t.uri),r.line,t):void 0])).filter(e=>!!e);return new o.Hover(c,t.validateRange(new o.Range(r.line,0,r.line,d)))}async getDetailsHoverMessage(e,t){let r=this.editor.selection.active.line,o=r+1;r=(e.lines.find(e=>e.line===o)??e.lines[0]).originalLine-1;let a=s.H.get("hovers");return(0,i.MX)(this.container,e,await n.nk.fromUri(t.uri),r,{autolinks:a.autolinks.enabled,dateFormat:s.H.get("defaultDateFormat"),format:a.detailsMarkdownFormat,pullRequests:a.pullRequests.enabled,timeout:250})}};function p(e){let t=[],r=Math.floor(e.length/2),o=e.length%2?e[r].getTime():(e[r-1].getTime()+e[r].getTime())/2,n=(e[e.length-1].getTime()-o)/5;for(let e=5;e>0;e--)t.push(o+n*e);t.push(o),n=(o-e[0].getTime())/4;for(let e=1;e<=4;e++)t.push(o-n*e);return t}((e,t,r,o)=>{for(var n,i=c(t,r),a=e.length-1;a>=0;a--)(n=e[a])&&(i=n(t,r,i)||i);return o&&i&&h(t,r,i)})([(0,a.Rm)({args:!1})],BlameAnnotationProviderBase.prototype,"getComputedHeatmap",1)},2890:(e,t,r)=>{r.d(t,{GutterBlameAnnotationProvider:()=>GutterBlameAnnotationProvider});var o=r(1398),n=r(2496),i=r(5621),a=r(1622),s=r(3656),l=r(9153),u=r(4985),h=r(5540),c=r(2469),d=r(216),p=r(6725),g=r(1139),m=r(5889),f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,y=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),b=e=>{throw TypeError(e)},w=(e,t,r,o)=>{for(var n,i=o>1?void 0:o?v(t,r):t,a=e.length-1;a>=0;a--)(n=e[a])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&f(t,r,i),i},P=(e,t,r)=>{if(null!=t){var o,n;"object"!=typeof t&&"function"!=typeof t&&b("Object expected"),r&&(o=t[y("asyncDispose")]),void 0===o&&(o=t[y("dispose")],r&&(n=o)),"function"!=typeof o&&b("Object not disposable"),n&&(o=function(){try{n.call(this)}catch(e){return Promise.reject(e)}}),e.push([r,o,t])}else r&&e.push([r]);return t},D=(e,t,r)=>{var o="function"==typeof SuppressedError?SuppressedError:function(e,t,r,o){return(o=Error(r)).name="SuppressedError",o.error=e,o.suppressed=t,o},n=e=>t=r?new o(e,t,"An error was suppressed during disposal"):(r=!0,e),i=o=>{for(;o=e.pop();)try{var a=o[1]&&o[1].call(o[2]);if(o[0])return Promise.resolve(a).then(i,e=>(n(e),i()))}catch(e){n(e)}if(r)throw t};return i()};let H=0x40000000-1;let GutterBlameAnnotationProvider=class GutterBlameAnnotationProvider extends g.z{constructor(e,t,r,o){super(e,t,"blame",r,o)}async clear(){if(await super.clear(),null!=m.I.gutterBlameHighlight)try{this.editor.setDecorations(m.I.gutterBlameHighlight,[])}catch{}}async onProvideAnnotation(e,t){var r=[];try{let e,a,s,l,g,f;let v=(0,u.dQ)(),y=await this.getBlame(t?.recompute);if(null==y)return!1;let b=P(r,(0,h.u)(v)),w=d.H.get("blame"),D=(0,c.Vx)(w.format).reduce((e,t)=>(e[t.key]=t.options,e),Object.create(null));i.c.has(w.format,"tips")&&(e=await this.container.git.getBranchesAndTagsTipsFn(y.repoPath));let H={dateFormat:null===w.dateFormat?d.H.get("defaultDateFormat"):w.dateFormat,getBranchAndTagTips:e,tokenOptions:D},x={family:d.H.get("blame.fontFamily"),size:d.H.get("blame.fontSize"),style:d.H.get("blame.fontStyle"),weight:d.H.get("blame.fontWeight")},k=w.avatars,S=d.H.get("defaultGravatarsStyle"),A=w.separateLines,O=(0,p.kM)(A,w.heatmap,w.avatars,w.format,H,x),R=[],B=new Map,T=k?new Map:void 0,F=!1;for(let e of(w.heatmap.enabled&&(g=this.getComputedHeatmap(y)),y.lines)){let t=e.line-1;if(l===e.sha){if(null==s)continue;s={...s},w.compact&&!F&&(null==f&&(f=n.EO.Space.repeat((0,c.RG)(s.renderOptions.before.contentText))),s.renderOptions={before:{...s.renderOptions.before,contentText:f}},A&&(s.renderOptions.before.textDecoration=`none;box-sizing: border-box${k?";padding: 0 0 0 18px":""}${x.family?`;font-family: ${x.family}`:""}${x.size?`;font-size: ${x.size}px`:""}`),F=!0),s.range=new o.Range(t,0,t,0),R.push(s);continue}if(F=!1,l=e.sha,a=y.commits.get(e.sha),null!=a){if(s=B.get(e.sha),null!=s){s={...s,range:new o.Range(t,0,t,0)},R.push(s);continue}s=(0,p.w)(a,w.format,H,O),null!=g&&(0,p.nx)(s,a.date,g),s.range=new o.Range(t,0,t,0),R.push(s),k&&null!=a.author.email&&await this.applyAvatarDecoration(a,s,S,T),B.set(e.sha,s)}}return b?.restart({suffix:" to compute gutter blame annotations"}),R.length&&(this.setDecorations([{decorationType:m.I.gutterBlameAnnotation,rangesOrOptions:R}]),b?.stop({suffix:" to apply all gutter blame annotations"})),this.registerHoverProviders(d.H.get("hovers.annotations")),!0}catch(e){var a=e,s=!0}finally{D(r,a,s)}}async selection(e){let t;if(!1===e||null==m.I.gutterBlameHighlight)return;let r=await this.blame;if(!r?.lines.length)return;if(e?.sha!=null)t=e.sha;else if(e?.line!=null){if(e.line>=0){let o=r.lines[e.line];t=o?.sha}}else t=l.$1(r.commits.values())?.sha;if(!t){this.editor.setDecorations(m.I.gutterBlameHighlight,[]);return}let n=(0,a.x1)(r.lines,e=>e.sha===t?this.editor.document.validateRange(new o.Range(e.line-1,0,e.line-1,H)):void 0);this.editor.setDecorations(m.I.gutterBlameHighlight,n)}async applyAvatarDecoration(e,t,r,o){let n=o.get(e.author.email??"");if(null==n){let t=(await e.getAvatarUri({defaultStyle:r,size:16})).toString(!0);n={contentText:"",height:"16px",width:"16px",textDecoration:`none;position:absolute;top:1px;left:5px;background:url(${encodeURI(t)});background-size:16px 16px;margin-left: 0 !important`},o.set(e.author.email??"",n)}t.renderOptions.after=n}};w([(0,s.Rm)()],GutterBlameAnnotationProvider.prototype,"onProvideAnnotation",1),w([(0,s.Rm)({args:!1})],GutterBlameAnnotationProvider.prototype,"selection",1)},7376:(e,t,r)=>{r.d(t,{GutterChangesAnnotationProvider:()=>GutterChangesAnnotationProvider});var o=r(1398),n=r(9674),i=r(3656),a=r(4985),s=r(2414),l=r(5540),u=r(216),h=r(8414),c=r(5889),d=Object.defineProperty,p=Object.getOwnPropertyDescriptor,g=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),m=e=>{throw TypeError(e)},f=(e,t,r)=>{if(null!=t){var o,n;"object"!=typeof t&&"function"!=typeof t&&m("Object expected"),r&&(o=t[g("asyncDispose")]),void 0===o&&(o=t[g("dispose")],r&&(n=o)),"function"!=typeof o&&m("Object not disposable"),n&&(o=function(){try{n.call(this)}catch(e){return Promise.reject(e)}}),e.push([r,o,t])}else r&&e.push([r]);return t},v=(e,t,r)=>{var o="function"==typeof SuppressedError?SuppressedError:function(e,t,r,o){return(o=Error(r)).name="SuppressedError",o.error=e,o.suppressed=t,o},n=e=>t=r?new o(e,t,"An error was suppressed during disposal"):(r=!0,e),i=o=>{for(;o=e.pop();)try{var a=o[1]&&o[1].call(o[2]);if(o[0])return Promise.resolve(a).then(i,e=>(n(e),i()))}catch(e){n(e)}if(r)throw t};return i()};let y=0x40000000-1;let GutterChangesAnnotationProvider=class GutterChangesAnnotationProvider extends h.w{hoverProviderDisposable;sortedHunkStarts;state;constructor(e,t,r,o){super(e,t,"changes",r,o)}canReuse(e){return!(this.annotationContext?.sha!==e?.sha||this.annotationContext?.only!==e?.only)}clear(){return this.state=void 0,null!=this.hoverProviderDisposable&&(this.hoverProviderDisposable.dispose(),this.hoverProviderDisposable=void 0),super.clear()}nextChange(){if(null==this.sortedHunkStarts)return;let e=-1,t=this.editor.selection.active.line;for(let r of this.sortedHunkStarts)if(r>t){e=r;break}-1===e&&(e=this.sortedHunkStarts[0]),e>0&&(this.editor.selection=new o.Selection(e,0,e,0),this.editor.revealRange(new o.Range(e,0,e,0),o.TextEditorRevealType.InCenterIfOutsideViewport))}previousChange(){if(null==this.sortedHunkStarts)return;let e=-1,t=this.editor.selection.active.line;for(let r of this.sortedHunkStarts){if(r>=t)break;e=r}-1===e&&(e=this.sortedHunkStarts[this.sortedHunkStarts.length-1]),e>0&&(this.editor.selection=new o.Selection(e,0,e,0),this.editor.revealRange(new o.Range(e,0,e,0),o.TextEditorRevealType.InCenterIfOutsideViewport))}async onProvideAnnotation(e,t){var r=[];try{let n,i;let u=(0,a.dQ)(),h=this.trackedDocument.uri.sha,d=e?.sha!=null&&e.sha!==h?`${e.sha}^`:void 0,p=null==h&&null==d;if(p){let e=await this.container.git.getOldestUnpushedRefForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri);if(null!=e)e=`${e}^`,n=await this.container.git.getCommitForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri,{ref:e}),null!=n?null!=d?d=e:(h=e,d=""):p=!1;else{let e=await this.container.git.getStatusForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri),t=e?.getPseudoCommits(this.container,await this.container.git.getCurrentUser(this.trackedDocument.uri.repoPath));t?.length?(n=await this.container.git.getCommitForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri),h="HEAD"):this.trackedDocument.dirty?h="HEAD":p=!1}}p||(n=await this.container.git.getCommitForFile(this.trackedDocument.uri.repoPath,this.trackedDocument.uri,{ref:d??h}),null==n||(null!=d||(h=`${n.ref}^`),d=n.ref));let g=(await Promise.allSettled(null==d&&this.editor.document.isDirty?[this.container.git.getDiffForFileContents(this.trackedDocument.uri,h,this.editor.document.getText()),this.container.git.getDiffForFile(this.trackedDocument.uri,h,d)]:[this.container.git.getDiffForFile(this.trackedDocument.uri,h,d)])).map(e=>(0,s.Ro)(e)).filter(e=>!!e);if(!g?.length)return!1;let m=f(r,(0,l.u)(u)),v=new Map,b=e?.sha!=null&&e?.only?await this.container.git.getBlame(this.trackedDocument.uri,this.editor?.document):void 0;for(let t of(this.sortedHunkStarts=[],g))for(let r of t.hunks){if(null!=b){let t=!0,o=e.sha;for(let e=r.current.position.start-1;e<r.current.position.end;e++)b.lines[e]?.sha===o&&(t=!1);if(t)continue}for(let[e,t]of r.lines){if("unchanged"===t.state)continue;let r=this.editor.document.validateRange(new o.Range(new o.Position(e-1,0),new o.Position(e-1,y)));this.sortedHunkStarts.push(r.start.line),null==i&&(i=new o.Selection(r.start,r.end));let n=v.get(t.state);null==n?(n={decorationType:"added"===t.state?c.I.changesLineAddedAnnotation:"removed"===t.state?c.I.changesLineDeletedAnnotation:c.I.changesLineChangedAnnotation,rangesOrOptions:[{range:r}]},v.set(t.state,n)):n.rangesOrOptions.push({range:r})}}return this.sortedHunkStarts.sort((e,t)=>e-t),m?.restart({suffix:" to compute recent changes annotations"}),v.size&&(this.setDecorations([...v.values()]),m?.stop({suffix:" to apply all recent changes annotations"}),null==i||e?.selection===!1||t?.restoring||(this.editor.selection=i,this.editor.revealRange(i,o.TextEditorRevealType.InCenterIfOutsideViewport))),this.state={commit:n,diffs:g},this.registerHoverProvider(),!0}catch(e){var n=e,i=!0}finally{v(r,n,i)}}registerHoverProvider(){let e=u.H.get("hovers");e.enabled&&e.annotations.enabled&&(this.hoverProviderDisposable?.dispose(),this.hoverProviderDisposable=o.languages.registerHoverProvider({pattern:this.editor.document.uri.fsPath},{provideHover:(e,t,r)=>this.provideHover(e,t,r)}))}async provideHover(e,t,r){if(null==this.state||"line"!==u.H.get("hovers.annotations.over")&&0!==t.character)return;let{commit:i,diffs:a}=this.state;for(let r of a)for(let a of r.hunks){let r=a.previous.count>a.current.count;if(t.line>=a.current.position.start-1&&t.line<=a.current.position.end-(r?0:1)){let s=await (0,n.ec)(i,this.trackedDocument.uri,t.line,a);if(null==s)return;return new o.Hover(s,e.validateRange(new o.Range(a.current.position.start-1,0,a.current.position.end-(r?0:1),y)))}}}};((e,t,r,o)=>{for(var n,i=p(t,r),a=e.length-1;a>=0;a--)(n=e[a])&&(i=n(t,r,i)||i);return o&&i&&d(t,r,i)})([(0,i.Rm)()],GutterChangesAnnotationProvider.prototype,"onProvideAnnotation",1)},5630:(e,t,r)=>{r.d(t,{GutterHeatmapBlameAnnotationProvider:()=>GutterHeatmapBlameAnnotationProvider});var o=r(1398),n=r(3656),i=r(4985),a=r(5540),s=r(6725),l=r(1139),u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,c=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),d=e=>{throw TypeError(e)},p=(e,t,r)=>{if(null!=t){var o,n;"object"!=typeof t&&"function"!=typeof t&&d("Object expected"),r&&(o=t[c("asyncDispose")]),void 0===o&&(o=t[c("dispose")],r&&(n=o)),"function"!=typeof o&&d("Object not disposable"),n&&(o=function(){try{n.call(this)}catch(e){return Promise.reject(e)}}),e.push([r,o,t])}else r&&e.push([r]);return t},g=(e,t,r)=>{var o="function"==typeof SuppressedError?SuppressedError:function(e,t,r,o){return(o=Error(r)).name="SuppressedError",o.error=e,o.suppressed=t,o},n=e=>t=r?new o(e,t,"An error was suppressed during disposal"):(r=!0,e),i=o=>{for(;o=e.pop();)try{var a=o[1]&&o[1].call(o[2]);if(o[0])return Promise.resolve(a).then(i,e=>(n(e),i()))}catch(e){n(e)}if(r)throw t};return i()};let GutterHeatmapBlameAnnotationProvider=class GutterHeatmapBlameAnnotationProvider extends l.z{constructor(e,t,r,o){super(e,t,"heatmap",r,o)}async onProvideAnnotation(e,t){var r=[];try{let e;let n=(0,i.dQ)(),l=await this.getBlame(t?.recompute);if(null==l)return!1;let u=p(r,(0,a.u)(n)),h=new Map,c=this.getComputedHeatmap(l);for(let t of l.lines){let r=t.line-1;e=l.commits.get(t.sha),null!=e&&(0,s.n0)(e.date,c,new o.Range(r,0,r,0),h)}return u?.restart({suffix:" to compute heatmap annotations"}),h.size&&(this.setDecorations([...h.values()]),u?.stop({suffix:" to apply all heatmap annotations"})),!0}catch(e){var n=e,l=!0}finally{g(r,n,l)}}};((e,t,r,o)=>{for(var n,i=h(t,r),a=e.length-1;a>=0;a--)(n=e[a])&&(i=n(t,r,i)||i);return o&&i&&u(t,r,i)})([(0,n.Rm)()],GutterHeatmapBlameAnnotationProvider.prototype,"onProvideAnnotation",1)}};