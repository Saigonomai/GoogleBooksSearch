import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return (
    <div className="entry">
      <div className="header">
      <p>{props.title} <br/>Written by {props.authors}</p>
      <div className="buttons">
      <a href={props.link}><button type="button">View</button></a>
      {props.button ? (
      <button onClick={() => props.onClick(props.title,props.author,props.description,props.image,props.link)} type="button">Save</button>
      ) : (
        <button onClick={() => props.onClick(props.id)} type="button">Delete</button>
      )}
      </div>
      </div>
      <p className="description"><img src={props.image} className="image"/>{props.description}</p>
    </div>
  );
}
