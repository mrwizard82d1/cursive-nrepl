// Compiled by ClojureScript 0.0-2371
goog.provide('cemerick.cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
cemerick.cljs.test._STAR_test_print_fn_STAR_ = null;
cemerick.cljs.test._STAR_entry_point_STAR_ = true;
cemerick.cljs.test._STAR_test_ctx_STAR_ = null;
cemerick.cljs.test.init_test_environment_STAR_ = (function init_test_environment_STAR_(aux_data){return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"test","test",577538877),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0)], null),(cljs.core.truth_(cemerick.cljs.test._STAR_test_print_fn_STAR_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143),cemerick.cljs.test._STAR_test_print_fn_STAR_], null):null)),new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128),cljs.core.List.EMPTY),aux_data));
});
cemerick.cljs.test.init_test_environment = (function init_test_environment(){var G__7835 = cemerick.cljs.test.init_test_environment_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786),cljs.core.List.EMPTY], null));cljs.core.swap_BANG_.call(null,G__7835,cljs.core.assoc,new cljs.core.Keyword(null,"async","async",1050769601),cemerick.cljs.test.init_test_environment_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY));
return G__7835;
});
cemerick.cljs.test.registered_tests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_test_hooks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_fixtures = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.register_test_BANG_ = (function register_test_BANG_(ns,name,fn){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_tests,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null),cljs.core.assoc,name,fn);
});
cemerick.cljs.test.register_test_ns_hook_BANG_ = (function register_test_ns_hook_BANG_(ns,name){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_test_hooks,cljs.core.assoc,ns,name);
});

/**
* @constructor
* @param {*} test_env
* @param {*} test_name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cemerick.cljs.test.TestContext = (function (test_env,test_name,__meta,__extmap){
this.test_env = test_env;
this.test_name = test_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4236__auto__,k__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;return cljs.core._lookup.call(null,this__4236__auto____$1,k__4237__auto__,null);
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4238__auto__,k7837,else__4239__auto__){var self__ = this;
var this__4238__auto____$1 = this;var G__7839 = (((k7837 instanceof cljs.core.Keyword))?k7837.fqn:null);switch (G__7839) {
case "test-name":
return self__.test_name;

break;
case "test-env":
return self__.test_env;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7837,else__4239__auto__);

}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4250__auto__,writer__4251__auto__,opts__4252__auto__){var self__ = this;
var this__4250__auto____$1 = this;var pr_pair__4253__auto__ = ((function (this__4250__auto____$1){
return (function (keyval__4254__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4251__auto__,cljs.core.pr_writer,""," ","",opts__4252__auto__,keyval__4254__auto__);
});})(this__4250__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4251__auto__,pr_pair__4253__auto__,"#cemerick.cljs.test.TestContext{",", ","}",opts__4252__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-env","test-env",-540228992),self__.test_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-name","test-name",-675595913),self__.test_name],null))], null),self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4234__auto__){var self__ = this;
var this__4234__auto____$1 = this;return self__.__meta;
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,self__.__extmap,self__.__hash));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4240__auto__){var self__ = this;
var this__4240__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4231__auto__){var self__ = this;
var this__4231__auto____$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_imap.call(null,this__4231__auto____$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4232__auto__,other__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;if(cljs.core.truth_((function (){var and__3628__auto__ = other__4233__auto__;if(cljs.core.truth_(and__3628__auto__))
{return ((this__4232__auto____$1.constructor === other__4233__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4232__auto____$1,other__4233__auto__));
} else
{return and__3628__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4245__auto__,k__4246__auto__){var self__ = this;
var this__4245__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test-env","test-env",-540228992),null,new cljs.core.Keyword(null,"test-name","test-name",-675595913),null], null), null),k__4246__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4245__auto____$1),self__.__meta),k__4246__auto__);
} else
{return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4246__auto__)),null));
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4243__auto__,k__4244__auto__,G__7836){var self__ = this;
var this__4243__auto____$1 = this;var pred__7840 = cljs.core.keyword_identical_QMARK_;var expr__7841 = k__4244__auto__;if(cljs.core.truth_(pred__7840.call(null,new cljs.core.Keyword(null,"test-env","test-env",-540228992),expr__7841)))
{return (new cemerick.cljs.test.TestContext(G__7836,self__.test_name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7840.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913),expr__7841)))
{return (new cemerick.cljs.test.TestContext(self__.test_env,G__7836,self__.__meta,self__.__extmap,null));
} else
{return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4244__auto__,G__7836),null));
}
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4248__auto__){var self__ = this;
var this__4248__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-env","test-env",-540228992),self__.test_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-name","test-name",-675595913),self__.test_name],null))], null),self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4235__auto__,G__7836){var self__ = this;
var this__4235__auto____$1 = this;return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,G__7836,self__.__extmap,self__.__hash));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4241__auto__,entry__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4242__auto__))
{return cljs.core._assoc.call(null,this__4241__auto____$1,cljs.core._nth.call(null,entry__4242__auto__,(0)),cljs.core._nth.call(null,entry__4242__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4241__auto____$1,entry__4242__auto__);
}
});
cemerick.cljs.test.TestContext.cljs$lang$type = true;
cemerick.cljs.test.TestContext.cljs$lang$ctorPrSeq = (function (this__4270__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cemerick.cljs.test/TestContext");
});
cemerick.cljs.test.TestContext.cljs$lang$ctorPrWriter = (function (this__4270__auto__,writer__4271__auto__){return cljs.core._write.call(null,writer__4271__auto__,"cemerick.cljs.test/TestContext");
});
cemerick.cljs.test.__GT_TestContext = (function __GT_TestContext(test_env,test_name){return (new cemerick.cljs.test.TestContext(test_env,test_name));
});
cemerick.cljs.test.map__GT_TestContext = (function map__GT_TestContext(G__7838){return (new cemerick.cljs.test.TestContext(new cljs.core.Keyword(null,"test-env","test-env",-540228992).cljs$core$IFn$_invoke$arity$1(G__7838),new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(G__7838),null,cljs.core.dissoc.call(null,G__7838,new cljs.core.Keyword(null,"test-env","test-env",-540228992),new cljs.core.Keyword(null,"test-name","test-name",-675595913))));
});
cemerick.cljs.test.maybe_deref = (function maybe_deref(x){if((function (){var G__7845 = x;if(G__7845)
{var bit__4304__auto__ = (G__7845.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4304__auto__) || (G__7845.cljs$core$IDeref$))
{return true;
} else
{if((!G__7845.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7845);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7845);
}
})())
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
cemerick.cljs.test.testing_complete_QMARK_ = (function testing_complete_QMARK_(test_env){var map__7847 = cemerick.cljs.test.maybe_deref.call(null,test_env);var map__7847__$1 = ((cljs.core.seq_QMARK_.call(null,map__7847))?cljs.core.apply.call(null,cljs.core.hash_map,map__7847):map__7847);var remaining = cljs.core.get.call(null,map__7847__$1,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312));var running = cljs.core.get.call(null,map__7847__$1,new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558));var async = cljs.core.get.call(null,map__7847__$1,new cljs.core.Keyword(null,"async","async",1050769601));var and__3628__auto__ = cljs.core.empty_QMARK_.call(null,remaining);if(and__3628__auto__)
{var and__3628__auto____$1 = cljs.core.empty_QMARK_.call(null,running);if(and__3628__auto____$1)
{var or__3640__auto__ = (async == null);if(or__3640__auto__)
{return or__3640__auto__;
} else
{return testing_complete_QMARK_.call(null,async);
}
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
});
/**
* Registers a watcher on the :async testing (sub)environment provided by
* [test-env]; when its key metrics (:test, :pass, :fail, :error) change,
* [callback] will be called with [test-env].  The watcher will be removed when all
* tests are complete.
* 
* If [test-env] is already complete, [callback] will be called with it as an
* argument immediately, and no watcher will be registered.
*/
cemerick.cljs.test.on_async_progress = (function on_async_progress(test_env,callback){if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env)))
{setTimeout((function (){return callback.call(null,test_env);
}),(1));
} else
{cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.maybe_deref.call(null,test_env)),cljs.core.gensym.call(null,"on-progress"),(function (key,ref,old,new$){var vec__7850 = cljs.core.map.call(null,(function (p1__7848_SHARP_){return cljs.core.select_keys.call(null,p1__7848_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"error","error",-978969032)], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old,new$], null));var oldv = cljs.core.nth.call(null,vec__7850,(0),null);var newv = cljs.core.nth.call(null,vec__7850,(1),null);var complete_QMARK_ = cemerick.cljs.test.testing_complete_QMARK_.call(null,new$);if(cljs.core.truth_((function (){var or__3640__auto__ = complete_QMARK_;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.not_EQ_.call(null,oldv,newv);
}
})()))
{callback.call(null,cemerick.cljs.test.maybe_deref.call(null,test_env));
} else
{}
if(cljs.core.truth_(complete_QMARK_))
{return cljs.core.remove_watch.call(null,ref,key);
} else
{return null;
}
}));
}
return test_env;
});
goog.exportSymbol('cemerick.cljs.test.on_async_progress', cemerick.cljs.test.on_async_progress);
/**
* Same as `on-async-progress`, but will only call [callback] when all tests are complete.
*/
cemerick.cljs.test.on_testing_complete = (function on_testing_complete(test_env,callback){return cemerick.cljs.test.on_async_progress.call(null,test_env,(function (test_env__$1){if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env__$1)))
{return callback.call(null,test_env__$1);
} else
{return null;
}
}));
});
goog.exportSymbol('cemerick.cljs.test.on_testing_complete', cemerick.cljs.test.on_testing_complete);
/**
* Returns a string representation of the current test.  Renders names
* in the test environment's ::test-functions list, then the source file and line of
* current assertion.
*/
cemerick.cljs.test.testing_vars_str = (function testing_vars_str(p__7851){var map__7853 = p__7851;var map__7853__$1 = ((cljs.core.seq_QMARK_.call(null,map__7853))?cljs.core.apply.call(null,cljs.core.hash_map,map__7853):map__7853);var m = map__7853__$1;var test_name = cljs.core.get.call(null,map__7853__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var test_env = cljs.core.get.call(null,map__7853__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var line = cljs.core.get.call(null,map__7853__$1,new cljs.core.Keyword(null,"line","line",212345235));var file = cljs.core.get.call(null,map__7853__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,(function (){var or__3640__auto__ = cljs.core.seq.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))));if(or__3640__auto__)
{return or__3640__auto__;
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,test_name);
}
})()))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)+")");
});
/**
* Returns a string representation of the current test context as represented in
* the [test-env]'s ::test-contexts list. Joins strings in that list with
* spaces.
*/
cemerick.cljs.test.testing_contexts_str = (function testing_contexts_str(test_env){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.reverse.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)))));
});
/**
* Increments the named counter in the [test-env] atom.
*/
cemerick.cljs.test.inc_report_counter = (function inc_report_counter(test_env,name){return cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),cljs.core.fnil.call(null,cljs.core.inc,(0)));
});
/**
* Generic reporting function, may be overridden to plug in
* different report formats (e.g., TAP, JUnit).  Assertions such as
* 'is' call 'report' to indicate results.  The argument given to
* 'report' will be a map with a :type key.  See the documentation at
* the top of test_is.clj for more information on the types of
* arguments for 'report'.
*/
cemerick.cljs.test.report = (function (){var method_table__4520__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4521__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4522__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4523__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4524__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("report",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4524__auto__,method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__));
})();
cemerick.cljs.test.file_and_line = (function file_and_line(error){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),error.fileName,new cljs.core.Keyword(null,"line","line",212345235),error.lineNumber], null);
});
/**
* Add file and line information to a test result and call report.
* If you are writing a custom assert-expr method, call this function
* to pass test results to report.
*/
cemerick.cljs.test.do_report = (function() {
var do_report = null;
var do_report__1 = (function (m){return cemerick.cljs.test.report.call(null,(function (){var G__7858 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m).fqn:null);switch (G__7858) {
case "error":
return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)),m);

break;
case "fail":
return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,Error()),m);

break;
default:
return m;

}
})());
});
var do_report__2 = (function (p__7854,m){var map__7857 = p__7854;var map__7857__$1 = ((cljs.core.seq_QMARK_.call(null,map__7857))?cljs.core.apply.call(null,cljs.core.hash_map,map__7857):map__7857);var test_ctx = map__7857__$1;var test_name = cljs.core.get.call(null,map__7857__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var test_env = cljs.core.get.call(null,map__7857__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null)))))));
}
return do_report.call(null,cljs.core.merge.call(null,m,test_ctx));
});
do_report = function(p__7854,m){
switch(arguments.length){
case 1:
return do_report__1.call(this,p__7854);
case 2:
return do_report__2.call(this,p__7854,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
do_report.cljs$core$IFn$_invoke$arity$1 = do_report__1;
do_report.cljs$core$IFn$_invoke$arity$2 = do_report__2;
return do_report;
})()
;
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__7860){var map__7861 = p__7860;var map__7861__$1 = ((cljs.core.seq_QMARK_.call(null,map__7861))?cljs.core.apply.call(null,cljs.core.hash_map,map__7861):map__7861);var m = map__7861__$1;var test_env = cljs.core.get.call(null,map__7861__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_7862 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3640__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.prn.call(null,m);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7862;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__7863){var map__7864 = p__7863;var map__7864__$1 = ((cljs.core.seq_QMARK_.call(null,map__7864))?cljs.core.apply.call(null,cljs.core.hash_map,map__7864):map__7864);var m = map__7864__$1;var test_env = cljs.core.get.call(null,map__7864__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_7865 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3640__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"pass","pass",1574159993));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7865;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (p__7866){var map__7867 = p__7866;var map__7867__$1 = ((cljs.core.seq_QMARK_.call(null,map__7867))?cljs.core.apply.call(null,cljs.core.hash_map,map__7867):map__7867);var m = map__7867__$1;var test_env = cljs.core.get.call(null,map__7867__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_7868 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3640__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"fail","fail",1706214930));
cljs.core.println.call(null,"\nFAIL in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else
{}
var temp__4126__auto___7869 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4126__auto___7869))
{var message_7870 = temp__4126__auto___7869;cljs.core.println.call(null,message_7870);
} else
{}
cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));
return cljs.core.println.call(null,"  actual:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7868;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"error","error",-978969032),(function (p__7871){var map__7872 = p__7871;var map__7872__$1 = ((cljs.core.seq_QMARK_.call(null,map__7872))?cljs.core.apply.call(null,cljs.core.hash_map,map__7872):map__7872);var m = map__7872__$1;var test_env = cljs.core.get.call(null,map__7872__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_7873 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3640__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,"\nERROR in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else
{}
var temp__4126__auto___7874 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4126__auto___7874))
{var message_7875 = temp__4126__auto___7874;cljs.core.println.call(null,message_7875);
} else
{}
cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));
cljs.core.print.call(null,"  actual: ");
var actual = new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m);if((actual instanceof Error))
{return cljs.core.println.call(null,actual.stack);
} else
{return cljs.core.prn.call(null,actual);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7873;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709),(function (p__7876){var map__7877 = p__7876;var map__7877__$1 = ((cljs.core.seq_QMARK_.call(null,map__7877))?cljs.core.apply.call(null,cljs.core.hash_map,map__7877):map__7877);var m = map__7877__$1;var test_env = cljs.core.get.call(null,map__7877__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_7878 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3640__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709));
cljs.core.println.call(null,"\nWARNING in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else
{}
var temp__4126__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4126__auto__))
{var message = temp__4126__auto__;return cljs.core.println.call(null,message);
} else
{return null;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7878;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"summary","summary",380847952),(function (p__7879){var map__7880 = p__7879;var map__7880__$1 = ((cljs.core.seq_QMARK_.call(null,map__7880))?cljs.core.apply.call(null,cljs.core.hash_map,map__7880):map__7880);var test_env = map__7880__$1;var error = cljs.core.get.call(null,map__7880__$1,new cljs.core.Keyword(null,"error","error",-978969032));var fail = cljs.core.get.call(null,map__7880__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));var pass = cljs.core.get.call(null,map__7880__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));var test = cljs.core.get.call(null,map__7880__$1,new cljs.core.Keyword(null,"test","test",577538877));var _STAR_print_fn_STAR_7881 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3640__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cljs.core.println.call(null,"\nRan",test,"tests containing",((pass + fail) + error),"assertions.");
var temp__4124__auto__ = (function (){var and__3628__auto__ = cljs.core.not.call(null,cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env));if(and__3628__auto__)
{return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,cljs.core.juxt.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312),new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)).call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(test_env)))));
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var pending_count = temp__4124__auto__;return cljs.core.println.call(null,"Waiting on",pending_count,("asynchronous test"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((pending_count > (1)))?"s":null))+" to complete."));
} else
{return cljs.core.println.call(null,"Testing complete:",fail,"failures,",error,"errors.");
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7881;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),(function (p__7882){var map__7883 = p__7882;var map__7883__$1 = ((cljs.core.seq_QMARK_.call(null,map__7883))?cljs.core.apply.call(null,cljs.core.hash_map,map__7883):map__7883);var m = map__7883__$1;var async = cljs.core.get.call(null,map__7883__$1,new cljs.core.Keyword(null,"async","async",1050769601));var test_env = cljs.core.get.call(null,map__7883__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var ns = cljs.core.get.call(null,map__7883__$1,new cljs.core.Keyword(null,"ns","ns",441598760));var _STAR_print_fn_STAR_7884 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3640__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.println.call(null,"\nTesting",ns,(cljs.core.truth_(async)?"(async)":""));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7884;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),(function (p__7885){var map__7886 = p__7885;var map__7886__$1 = ((cljs.core.seq_QMARK_.call(null,map__7886))?cljs.core.apply.call(null,cljs.core.hash_map,map__7886):map__7886);var m = map__7886__$1;var test_env = cljs.core.get.call(null,map__7886__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),(function (p__7887){var map__7888 = p__7887;var map__7888__$1 = ((cljs.core.seq_QMARK_.call(null,map__7888))?cljs.core.apply.call(null,cljs.core.hash_map,map__7888):map__7888);var m = map__7888__$1;var test_env = cljs.core.get.call(null,map__7888__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),(function (p__7889){var map__7890 = p__7889;var map__7890__$1 = ((cljs.core.seq_QMARK_.call(null,map__7890))?cljs.core.apply.call(null,cljs.core.hash_map,map__7890):map__7890);var m = map__7890__$1;var test_env = cljs.core.get.call(null,map__7890__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));return null;
}));
/**
* Wrap test runs in a fixture function to perform setup and
* teardown. Using a fixture-type of :each wraps every test
* individually, while :once wraps the whole run in a single function.
* @param {...*} var_args
*/
cemerick.cljs.test.register_fixtures_BANG_ = (function() { 
var register_fixtures_BANG___delegate = function (ns_sym,fixture_type,fixture_fns){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_fixtures,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_sym,fixture_type], null),cljs.core.constantly.call(null,fixture_fns));
};
var register_fixtures_BANG_ = function (ns_sym,fixture_type,var_args){
var fixture_fns = null;if (arguments.length > 2) {
  fixture_fns = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return register_fixtures_BANG___delegate.call(this,ns_sym,fixture_type,fixture_fns);};
register_fixtures_BANG_.cljs$lang$maxFixedArity = 2;
register_fixtures_BANG_.cljs$lang$applyTo = (function (arglist__7891){
var ns_sym = cljs.core.first(arglist__7891);
arglist__7891 = cljs.core.next(arglist__7891);
var fixture_type = cljs.core.first(arglist__7891);
var fixture_fns = cljs.core.rest(arglist__7891);
return register_fixtures_BANG___delegate(ns_sym,fixture_type,fixture_fns);
});
register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic = register_fixtures_BANG___delegate;
return register_fixtures_BANG_;
})()
;
/**
* The default, empty, fixture function.  Just calls its argument.
*/
cemerick.cljs.test.default_fixture = (function default_fixture(f){return f.call(null);
});
/**
* Composes two fixture functions, creating a new fixture function
* that combines their behavior.
*/
cemerick.cljs.test.compose_fixtures = (function compose_fixtures(f1,f2){return (function (g){return f1.call(null,(function (){return f2.call(null,g);
}));
});
});
/**
* Composes a collection of fixtures, in order.  Always returns a valid
* fixture function, even if the collection is empty.
*/
cemerick.cljs.test.join_fixtures = (function join_fixtures(fixtures){return cljs.core.reduce.call(null,cemerick.cljs.test.compose_fixtures,cemerick.cljs.test.default_fixture,fixtures);
});
cemerick.cljs.test.async_test_QMARK_ = (function async_test_QMARK_(test_fn){return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,test_fn)));
});
cemerick.cljs.test.test_async_fn = (function test_async_fn(async_test_env,test_name,test_fn){cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),test_fn,new cljs.core.Keyword(null,"test-env","test-env",-540228992),async_test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name], null));
cemerick.cljs.test.inc_report_counter.call(null,async_test_env,new cljs.core.Keyword(null,"test","test",577538877));
return test_fn.call(null,(new cemerick.cljs.test.TestContext(async_test_env,test_name)));
});
cemerick.cljs.test.start_next_async_test = (function start_next_async_test(async_test_env){var next_test = cljs.core.atom.call(null,(function (){return null;
}));cljs.core.swap_BANG_.call(null,async_test_env,((function (next_test){
return (function (env){var temp__4124__auto__ = (function (){var and__3628__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(env));if(and__3628__auto__)
{return cljs.core.first.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312).cljs$core$IFn$_invoke$arity$1(env));
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var vec__7893 = temp__4124__auto__;var name = cljs.core.nth.call(null,vec__7893,(0),null);var testfn = cljs.core.nth.call(null,vec__7893,(1),null);cljs.core.reset_BANG_.call(null,next_test,testfn);
var ns_7894 = cljs.core.namespace.call(null,name);if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,async_test_env)),ns_7894))
{} else
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns_7894,new cljs.core.Keyword(null,"test-env","test-env",-540228992),async_test_env,new cljs.core.Keyword(null,"async","async",1050769601),true], null));
cljs.core.alter_meta_BANG_.call(null,async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),ns_7894);
}
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312)], null),cljs.core.dissoc,name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)], null),cljs.core.assoc,name,(new Date()));
} else
{return env;
}
});})(next_test))
);
setTimeout(((function (next_test){
return (function (){return cljs.core.deref.call(null,next_test).call(null);
});})(next_test))
,(1));
return async_test_env;
});
/**
* Removes framework-internal bits from a test environment for more pleasant human viewing.
*/
cemerick.cljs.test.squelch_internals = (function squelch_internals(test_env){var G__7899 = test_env;cljs.core.swap_BANG_.call(null,G__7899,((function (G__7899){
return (function (p1__7895_SHARP_){return cljs.core.reduce.call(null,((function (G__7899){
return (function (env,p__7900){var vec__7901 = p__7900;var k = cljs.core.nth.call(null,vec__7901,(0),null);var v = cljs.core.nth.call(null,vec__7901,(1),null);if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,k),cljs.core.namespace.call(null,new cljs.core.Keyword("cemerick.cljs.test","foo","cemerick.cljs.test/foo",-1669146357))))
{return env;
} else
{return cljs.core.assoc.call(null,env,k,v);
}
});})(G__7899))
,cljs.core.PersistentArrayMap.EMPTY,p1__7895_SHARP_);
});})(G__7899))
);
return G__7899;
});
cemerick.cljs.test.finish_test_entry_point = (function finish_test_entry_point(entry_point_QMARK_,test_env){if(cljs.core.truth_(entry_point_QMARK_))
{if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))))
{cljs.core.swap_BANG_.call(null,test_env,cljs.core.dissoc,new cljs.core.Keyword(null,"async","async",1050769601));
} else
{cemerick.cljs.test.start_next_async_test.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)));
}
return cljs.core.deref.call(null,cemerick.cljs.test.squelch_internals.call(null,test_env));
} else
{return test_env;
}
});
cemerick.cljs.test.schedule_async_test = (function schedule_async_test(async_test_env,test_name,test_fn){cljs.core.swap_BANG_.call(null,async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312)], null),cljs.core.fnil.call(null,cljs.core.assoc,cljs.core.sorted_map.call(null)),test_name,cljs.core.with_meta.call(null,(function (){return cemerick.cljs.test.test_async_fn.call(null,async_test_env,test_name,test_fn);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),test_name], null)));
return async_test_env;
});
cemerick.cljs.test.done_STAR_ = (function() {
var done_STAR_ = null;
var done_STAR___1 = (function (p__7903){var map__7907 = p__7903;var map__7907__$1 = ((cljs.core.seq_QMARK_.call(null,map__7907))?cljs.core.apply.call(null,cljs.core.hash_map,map__7907):map__7907);var test_ctx = map__7907__$1;var test_name = cljs.core.get.call(null,map__7907__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var async_test_env = cljs.core.get.call(null,map__7907__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null)))))));
}
var first_call_QMARK_ = cljs.core.atom.call(null,false);cljs.core.swap_BANG_.call(null,async_test_env,((function (first_call_QMARK_,map__7907,map__7907__$1,test_ctx,test_name,async_test_env){
return (function (env){cljs.core.reset_BANG_.call(null,first_call_QMARK_,cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558).cljs$core$IFn$_invoke$arity$1(env),test_name));
return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)], null),cljs.core.dissoc,test_name);
});})(first_call_QMARK_,map__7907,map__7907__$1,test_ctx,test_name,async_test_env))
);
if(cljs.core.truth_(cljs.core.deref.call(null,first_call_QMARK_)))
{cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),test_name], null),test_ctx));
if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,async_test_env)))
{cemerick.cljs.test.squelch_internals.call(null,async_test_env);
} else
{cemerick.cljs.test.start_next_async_test.call(null,async_test_env);
}
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709),new cljs.core.Keyword(null,"message","message",-406056002),"`(done)` called multiple times to signal end-of-test"], null),test_ctx));
}
return async_test_env;
});
var done_STAR___2 = (function (p__7902,error){var map__7906 = p__7902;var map__7906__$1 = ((cljs.core.seq_QMARK_.call(null,map__7906))?cljs.core.apply.call(null,cljs.core.hash_map,map__7906):map__7906);var test_ctx = map__7906__$1;var test_name = cljs.core.get.call(null,map__7906__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var test_env = cljs.core.get.call(null,map__7906__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null)))))));
}
cemerick.cljs.test.do_report.call(null,cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),error], null),test_ctx)));
return done_STAR_.call(null,test_ctx);
});
done_STAR_ = function(p__7902,error){
switch(arguments.length){
case 1:
return done_STAR___1.call(this,p__7902);
case 2:
return done_STAR___2.call(this,p__7902,error);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
done_STAR_.cljs$core$IFn$_invoke$arity$1 = done_STAR___1;
done_STAR_.cljs$core$IFn$_invoke$arity$2 = done_STAR___2;
return done_STAR_;
})()
;
cemerick.cljs.test.stop = (function stop(async_test_env){return cljs.core.swap_BANG_.call(null,async_test_env,cljs.core.assoc,new cljs.core.Keyword(null,"stop","stop",-2140911342),true);
});
/**
* If v has a function in its :test metadata, calls that function,
* conjing its name into the test environment's ::test-functions list.
* 
* Note that this is the implementation of `test-var` in clojure.test,
* which is a macro in clojurescript.test.  See `cemerick.cljs.test/test-var`
* in the Clojure file for `test-var`.
*/
cemerick.cljs.test.test_function = (function() {
var test_function = null;
var test_function__1 = (function (v){return test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),v);
});
var test_function__2 = (function (test_env,v){var entry_point_QMARK___5223__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_7911 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
if(cljs.core.fn_QMARK_.call(null,v))
{} else
{throw (new Error(("Assert failed: test-var must be passed the function to be tested (not a symbol naming it)\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))));
}
var map__7912_7914 = cljs.core.meta.call(null,v);var map__7912_7915__$1 = ((cljs.core.seq_QMARK_.call(null,map__7912_7914))?cljs.core.apply.call(null,cljs.core.hash_map,map__7912_7914):map__7912_7914);var t_7916 = cljs.core.get.call(null,map__7912_7915__$1,new cljs.core.Keyword(null,"test","test",577538877));var test_name_7917 = cljs.core.get.call(null,map__7912_7915__$1,new cljs.core.Keyword(null,"name","name",1843675177));var async_QMARK__7918 = cljs.core.get.call(null,map__7912_7915__$1,new cljs.core.Keyword(null,"async","async",1050769601));if(cljs.core.truth_(t_7916))
{if(cljs.core.truth_(async_QMARK__7918))
{cemerick.cljs.test.schedule_async_test.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)),test_name_7917,t_7916);
} else
{try{cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786)], null),cljs.core.conj,(function (){var or__3640__auto__ = test_name_7917;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return v;
}
})());
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_7917], null));
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"test","test",577538877));
try{t_7916.call(null,(new cemerick.cljs.test.TestContext(test_env,test_name_7917)));
}catch (e7913){if((e7913 instanceof Error))
{var e_7919 = e7913;cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_7917,new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),e_7919], null));
} else
{throw e7913;

}
}cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_7917], null));
}finally {cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786)], null),cljs.core.pop);
}}
} else
{}
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___5223__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_7911;
}});
test_function = function(test_env,v){
switch(arguments.length){
case 1:
return test_function__1.call(this,test_env);
case 2:
return test_function__2.call(this,test_env,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_function.cljs$core$IFn$_invoke$arity$1 = test_function__1;
test_function.cljs$core$IFn$_invoke$arity$2 = test_function__2;
return test_function;
})()
;
/**
* Calls test-var on every var interned in the namespace, with fixtures.
*/
cemerick.cljs.test.test_all_vars = (function() {
var test_all_vars = null;
var test_all_vars__1 = (function (ns_sym){return test_all_vars.call(null,cemerick.cljs.test.init_test_environment.call(null),ns_sym);
});
var test_all_vars__2 = (function (test_env,ns_sym){var entry_point_QMARK___5223__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_7928 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
var tests_7933 = cljs.core.filter.call(null,((function (_STAR_entry_point_STAR_7928,entry_point_QMARK___5223__auto__){
return (function (p1__7920_SHARP_){return new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__7920_SHARP_));
});})(_STAR_entry_point_STAR_7928,entry_point_QMARK___5223__auto__))
,cljs.core.vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests),ns_sym)));var once_fixture_fn_7934 = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));var each_fixture_fn_7935 = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));once_fixture_fn_7934.call(null,((function (once_fixture_fn_7934,each_fixture_fn_7935,tests_7933,_STAR_entry_point_STAR_7928,entry_point_QMARK___5223__auto__){
return (function (){var seq__7929 = cljs.core.seq.call(null,cljs.core.remove.call(null,cemerick.cljs.test.async_test_QMARK_,tests_7933));var chunk__7930 = null;var count__7931 = (0);var i__7932 = (0);while(true){
if((i__7932 < count__7931))
{var v = cljs.core._nth.call(null,chunk__7930,i__7932);each_fixture_fn_7935.call(null,((function (seq__7929,chunk__7930,count__7931,i__7932,v,once_fixture_fn_7934,each_fixture_fn_7935,tests_7933,_STAR_entry_point_STAR_7928,entry_point_QMARK___5223__auto__){
return (function (){return cemerick.cljs.test.test_function.call(null,test_env,v);
});})(seq__7929,chunk__7930,count__7931,i__7932,v,once_fixture_fn_7934,each_fixture_fn_7935,tests_7933,_STAR_entry_point_STAR_7928,entry_point_QMARK___5223__auto__))
);
{
var G__7936 = seq__7929;
var G__7937 = chunk__7930;
var G__7938 = count__7931;
var G__7939 = (i__7932 + (1));
seq__7929 = G__7936;
chunk__7930 = G__7937;
count__7931 = G__7938;
i__7932 = G__7939;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7929);if(temp__4126__auto__)
{var seq__7929__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7929__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__7929__$1);{
var G__7940 = cljs.core.chunk_rest.call(null,seq__7929__$1);
var G__7941 = c__4410__auto__;
var G__7942 = cljs.core.count.call(null,c__4410__auto__);
var G__7943 = (0);
seq__7929 = G__7940;
chunk__7930 = G__7941;
count__7931 = G__7942;
i__7932 = G__7943;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__7929__$1);each_fixture_fn_7935.call(null,((function (seq__7929,chunk__7930,count__7931,i__7932,v,seq__7929__$1,temp__4126__auto__,once_fixture_fn_7934,each_fixture_fn_7935,tests_7933,_STAR_entry_point_STAR_7928,entry_point_QMARK___5223__auto__){
return (function (){return cemerick.cljs.test.test_function.call(null,test_env,v);
});})(seq__7929,chunk__7930,count__7931,i__7932,v,seq__7929__$1,temp__4126__auto__,once_fixture_fn_7934,each_fixture_fn_7935,tests_7933,_STAR_entry_point_STAR_7928,entry_point_QMARK___5223__auto__))
);
{
var G__7944 = cljs.core.next.call(null,seq__7929__$1);
var G__7945 = null;
var G__7946 = (0);
var G__7947 = (0);
seq__7929 = G__7944;
chunk__7930 = G__7945;
count__7931 = G__7946;
i__7932 = G__7947;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(once_fixture_fn_7934,each_fixture_fn_7935,tests_7933,_STAR_entry_point_STAR_7928,entry_point_QMARK___5223__auto__))
);
cljs.core.reduce.call(null,((function (tests_7933,_STAR_entry_point_STAR_7928,entry_point_QMARK___5223__auto__){
return (function (p1__7921_SHARP_,p2__7922_SHARP_){return cljs.core.apply.call(null,cemerick.cljs.test.schedule_async_test,p1__7921_SHARP_,p2__7922_SHARP_);
});})(tests_7933,_STAR_entry_point_STAR_7928,entry_point_QMARK___5223__auto__))
,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)),cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"test","test",577538877)),cljs.core.meta),cljs.core.filter.call(null,cemerick.cljs.test.async_test_QMARK_,tests_7933)));
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___5223__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_7928;
}});
test_all_vars = function(test_env,ns_sym){
switch(arguments.length){
case 1:
return test_all_vars__1.call(this,test_env);
case 2:
return test_all_vars__2.call(this,test_env,ns_sym);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_all_vars.cljs$core$IFn$_invoke$arity$1 = test_all_vars__1;
test_all_vars.cljs$core$IFn$_invoke$arity$2 = test_all_vars__2;
return test_all_vars;
})()
;
/**
* If the namespace defines a function named test-ns-hook, calls that.
* Otherwise, calls test-all-vars on the namespace.  'ns' is a
* namespace object or a symbol.
* 
* Internally binds *report-counters* to an atom initialized to
* *inital-report-counters*.  Returns the final, dereferenced state of
* *report-counters*.
*/
cemerick.cljs.test.test_ns = (function() {
var test_ns = null;
var test_ns__1 = (function (ns_sym){return test_ns.call(null,cemerick.cljs.test.init_test_environment.call(null),ns_sym);
});
var test_ns__2 = (function (test_env,ns_sym){var entry_point_QMARK___5223__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_7949 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns_sym,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env], null));
var temp__4124__auto___7950 = cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_test_hooks),ns_sym);if(cljs.core.truth_(temp__4124__auto___7950))
{var test_hook_7951 = temp__4124__auto___7950;test_hook_7951.call(null,test_env);
} else
{cemerick.cljs.test.test_all_vars.call(null,test_env,ns_sym);
}
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns_sym,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env], null));
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___5223__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_7949;
}});
test_ns = function(test_env,ns_sym){
switch(arguments.length){
case 1:
return test_ns__1.call(this,test_env);
case 2:
return test_ns__2.call(this,test_env,ns_sym);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_ns.cljs$core$IFn$_invoke$arity$1 = test_ns__1;
test_ns.cljs$core$IFn$_invoke$arity$2 = test_ns__2;
return test_ns;
})()
;
cemerick.cljs.test.test_summary = (function test_summary(test_env){var test_env__$1 = cemerick.cljs.test.maybe_deref.call(null,test_env);return cemerick.cljs.test.do_report.call(null,cljs.core.assoc.call(null,cljs.core.merge_with.call(null,cljs.core._PLUS_,test_env__$1,cemerick.cljs.test.maybe_deref.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(test_env__$1))),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));
});
/**
* Runs all tests in the given namespaces; prints results.
* Defaults to current namespace if none given.  Returns a map
* summarizing test results.
* @param {...*} var_args
*/
cemerick.cljs.test.run_tests_STAR_ = (function() { 
var run_tests_STAR___delegate = function (namespaces){var vec__7958 = (((cljs.core.first.call(null,namespaces) instanceof cljs.core.Atom))?namespaces:cljs.core.cons.call(null,cemerick.cljs.test.init_test_environment.call(null),namespaces));var test_env = cljs.core.nth.call(null,vec__7958,(0),null);var namespaces__$1 = cljs.core.nthnext.call(null,vec__7958,(1));var entry_point_QMARK___5223__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_7959 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
var seq__7960_7964 = cljs.core.seq.call(null,cljs.core.distinct.call(null,namespaces__$1));var chunk__7961_7965 = null;var count__7962_7966 = (0);var i__7963_7967 = (0);while(true){
if((i__7963_7967 < count__7962_7966))
{var ns_7968 = cljs.core._nth.call(null,chunk__7961_7965,i__7963_7967);cemerick.cljs.test.test_ns.call(null,test_env,ns_7968);
{
var G__7969 = seq__7960_7964;
var G__7970 = chunk__7961_7965;
var G__7971 = count__7962_7966;
var G__7972 = (i__7963_7967 + (1));
seq__7960_7964 = G__7969;
chunk__7961_7965 = G__7970;
count__7962_7966 = G__7971;
i__7963_7967 = G__7972;
continue;
}
} else
{var temp__4126__auto___7973 = cljs.core.seq.call(null,seq__7960_7964);if(temp__4126__auto___7973)
{var seq__7960_7974__$1 = temp__4126__auto___7973;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7960_7974__$1))
{var c__4410__auto___7975 = cljs.core.chunk_first.call(null,seq__7960_7974__$1);{
var G__7976 = cljs.core.chunk_rest.call(null,seq__7960_7974__$1);
var G__7977 = c__4410__auto___7975;
var G__7978 = cljs.core.count.call(null,c__4410__auto___7975);
var G__7979 = (0);
seq__7960_7964 = G__7976;
chunk__7961_7965 = G__7977;
count__7962_7966 = G__7978;
i__7963_7967 = G__7979;
continue;
}
} else
{var ns_7980 = cljs.core.first.call(null,seq__7960_7974__$1);cemerick.cljs.test.test_ns.call(null,test_env,ns_7980);
{
var G__7981 = cljs.core.next.call(null,seq__7960_7974__$1);
var G__7982 = null;
var G__7983 = (0);
var G__7984 = (0);
seq__7960_7964 = G__7981;
chunk__7961_7965 = G__7982;
count__7962_7966 = G__7983;
i__7963_7967 = G__7984;
continue;
}
}
} else
{}
}
break;
}
cemerick.cljs.test.on_testing_complete.call(null,test_env,cemerick.cljs.test.test_summary);
cemerick.cljs.test.test_summary.call(null,test_env);
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___5223__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_7959;
}};
var run_tests_STAR_ = function (var_args){
var namespaces = null;if (arguments.length > 0) {
  namespaces = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return run_tests_STAR___delegate.call(this,namespaces);};
run_tests_STAR_.cljs$lang$maxFixedArity = 0;
run_tests_STAR_.cljs$lang$applyTo = (function (arglist__7985){
var namespaces = cljs.core.seq(arglist__7985);
return run_tests_STAR___delegate(namespaces);
});
run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic = run_tests_STAR___delegate;
return run_tests_STAR_;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_tests_STAR_', cemerick.cljs.test.run_tests_STAR_);
/**
* Runs all tests in all namespaces; prints results.
* Optional argument is a regular expression; only namespaces with
* names matching the regular expression (with re-matches) will be
* tested.
*/
cemerick.cljs.test.run_all_tests = (function() {
var run_all_tests = null;
var run_all_tests__0 = (function (){return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests)));
});
var run_all_tests__1 = (function (re){return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.filter.call(null,(function (p1__7986_SHARP_){return cljs.core.re_matches.call(null,re,cljs.core.name.call(null,p1__7986_SHARP_));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests))));
});
run_all_tests = function(re){
switch(arguments.length){
case 0:
return run_all_tests__0.call(this);
case 1:
return run_all_tests__1.call(this,re);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
run_all_tests.cljs$core$IFn$_invoke$arity$0 = run_all_tests__0;
run_all_tests.cljs$core$IFn$_invoke$arity$1 = run_all_tests__1;
return run_all_tests;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_all_tests', cemerick.cljs.test.run_all_tests);
/**
* Returns true if the given test summary indicates all tests
* were successful, false otherwise.
*/
cemerick.cljs.test.successful_QMARK_ = (function successful_QMARK_(test_env){var map__7988 = cemerick.cljs.test.maybe_deref.call(null,test_env);var map__7988__$1 = ((cljs.core.seq_QMARK_.call(null,map__7988))?cljs.core.apply.call(null,cljs.core.hash_map,map__7988):map__7988);var async = cljs.core.get.call(null,map__7988__$1,new cljs.core.Keyword(null,"async","async",1050769601));var error = cljs.core.get.call(null,map__7988__$1,new cljs.core.Keyword(null,"error","error",-978969032));var fail = cljs.core.get.call(null,map__7988__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));var and__3628__auto__ = cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env);if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = ((function (){var or__3640__auto__ = fail;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (0);
}
})() === (0));if(and__3628__auto____$1)
{var and__3628__auto____$2 = ((function (){var or__3640__auto__ = error;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (0);
}
})() === (0));if(and__3628__auto____$2)
{var or__3640__auto__ = (async == null);if(or__3640__auto__)
{return or__3640__auto__;
} else
{return successful_QMARK_.call(null,async);
}
} else
{return and__3628__auto____$2;
}
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
});
goog.exportSymbol('cemerick.cljs.test.successful_QMARK_', cemerick.cljs.test.successful_QMARK_);
cemerick.cljs.test.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
goog.exportSymbol('cemerick.cljs.test.set_print_fn_BANG_', cemerick.cljs.test.set_print_fn_BANG_);
