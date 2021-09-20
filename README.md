# task-canvas-IT
## Description  
Drag and drop implementation in canvas.  
![Illustration for the project](https://github.com/LonelIce/task-canvas-IT/blob/main/Promo/Promo.gif)  
Solitaire implemented by scratch on app.ts. The experience of independent learning at the time of writing the code is 3 months.  
Technologies used:
* TypeScript  
* Webpack5  
* Canvas  
## About the project.
* At the first launch, the application displays the created rectangles in a list, one below the other, at a small distance from each other.  
* The user can move the rectangles on the canvas using the drag & drop mechanism.  
* If the rectangle being moved intersects with others, then all intersecting shapes change the fill color to red. You can complete the move (make a drop) only if there are no intersections. Otherwise, the rectangle returns to its original position after the drop.  
* As soon as one of the sides of the rectangle being moved approaches one of the sides of the other rectangle at a distance of <= intervalGluing, the rectangles interlock - that is, they become close to each other with the alignment of one of the edges of their sides.  
* To uncouple the rectangles, you need to move them to a distance > intervalGluing from each other.  
## Project setup
1. `npm install`    
1. `npm run dev`
