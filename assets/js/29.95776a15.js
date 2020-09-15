(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{424:function(e,t,a){"use strict";a.r(t);var s=a(25),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mustache-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mustache-templates"}},[e._v("#")]),e._v(" Mustache Templates")]),e._v(" "),a("p",[e._v("When using templates the top level is a property of the message object:\n"),a("code",[e._v("msg.payload")]),e._v(" would be "),a("code",{pre:!0},[e._v("{{payload}}")]),e._v(".")]),e._v(" "),a("p",[e._v("You can access flow, global, and states contexts "),a("code",{pre:!0},[e._v("{{flow.foobar}}")]),e._v(" "),a("code",{pre:!0},[e._v("{{global.something}}")]),e._v(". For the\n"),a("code",[e._v("states")]),e._v(" context you can use "),a("code",{pre:!0},[e._v("{{entity.domain.entity_id}}")]),e._v(" to\nget the state or drill further down "),a("code",{pre:!0},[e._v("{{entity.light.kitchen.attributes.friendly_name}}")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("code",{pre:!0},[e._v("{{entity.light.kitchen}}")]),e._v(" and "),a("code",{pre:!0},[e._v("{{entity.light.kitchen.state}}")]),e._v(" are equivalent")])]),e._v(" "),a("p",[e._v("By default, Mustache will replace certain characters with their HTML escape\ncodes. To stop this happening, you can use triple braces:\n"),a("code",{pre:!0},[e._v("{{{payload}}}")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Mustache templates work well with strings but if you're trying to insert a JSON\nobject somewhere you're better off using a JSONata expression or doing with a\nfunction node and passing it in as an input.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);