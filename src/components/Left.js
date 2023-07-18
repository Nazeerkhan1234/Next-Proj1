import React from "react";

export default function Left() {
  return (
    <aside>
      <ul className="nav p-0 flex-column">
        <li className="nav-item">
          <a className="nav-link active pe-0" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  pe-0" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link pe-0" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled pe-0">Disabled</a>
        </li>
      </ul>
    </aside>
  );
}
