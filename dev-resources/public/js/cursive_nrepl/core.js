// Compiled by ClojureScript 0.0-2371
goog.provide('cursive_nrepl.core');
goog.require('cljs.core');
cursive_nrepl.core.foo = (function foo(greeting){if(cljs.core.truth_(greeting))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(greeting)+"ClojureScript!");
} else
{return ("Hello, ClojureScript!");
}
});
document.write(cursive_nrepl.core.foo.call(null,"Welcome to "));
