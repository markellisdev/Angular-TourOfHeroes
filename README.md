# Angular- Tour Of Heroes

This is my version of the Angular Tour of Heroes walkthrough.

I decided to base mine off their instructions, but used AngularCLI and based
mine on LEGO characters, hence the name Tour Of Legos.

These are the steps I've followed so far.
1. Install AngularCLI

   You can follow the steps here
   
   https://github.com/angular/angular-cli#installation
   
   or if you're comfortable with the command line and already have Node 6.9.0 or higher, together with NPM 3 or
  higher, you can simply `npm install -g @angular/cli`
2. Now you'll begin to follow the Tour Of Heroes walkthrough from here

   Skip down to the "Show the Hero" section

   Follow the first instruction "Add two properties to the AppComponent......"

   At the second instruction, "Now update the template in the @Component decorator.......", you'll need to open `app.component.html`
     * This is because the "template" portion has now been separated out as a separate component for you in this version of Angular, so you only need open that file anytime the tutorial refers to "template". `"template" == app.component.html`
     * Delete placeholder content that the CLI installed for you. I chose to keep the Angular logo and "Welcome to....".
     * Continue to follow the tutorial steps until you get to "Edit the hero name", which will require two-way binding.
     * At this point, my `app.component.html` file looks like this

    ```html
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      <img width="300" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <!--You may remove the above content if you choose to.-->
    <ul>
      <li>
        <h1>{{title}}</h1>
        <h2>{{lego.name}} details!</h2>
        <div><label>id: </label>{{lego.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="lego.name" placeholder="name">
        </div>
      </li>
    </ul>
    ```
