/* This is the basic component. */
let component = ReasonReact.statelessComponent("Page");

/* This is your familiar handleClick from ReactJS. This mandatorily takes the payload,
   then the `self` record, which contains state (none here), `handle`, `send`
   and other utilities */
let handleClick = (_event, _self) => Js.log("clicked!");

/* `make` is the function that mandatorily takes `children` (if you want to use
   `JSX). `message` is a named argument, which simulates ReactJS props. Usage:

   `<Page message="hello" />`

   Which desugars to

   `ReasonReact.element (Page.make message::"hello" [||])` */
let make = (~message, _children) => {
  ...component,
  render: self =>
    <button onClick=(self.handle(handleClick))>
      (ReasonReact.string(message))
    </button>,
};
