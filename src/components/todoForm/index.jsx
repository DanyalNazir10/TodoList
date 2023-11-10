import React, { useState } from "react";

export default function todoForm () {

  return (
    <>
      <form>
        <input
          type="text"
          name="addTodoItem"
          id="addTodoItem"
          placeholder="Input task name and then enter to add"
        />
      </form>
    </>
  );
};

