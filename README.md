# task-canvas-IT
## Description  
Drag and drop implementation in canvas.  
![Illustration for the project](https://github.com/LonelIce/task-canvas-IT/blob/main/Promo/Promo.gif)  
Solitaire implemented by scratch on app.ts. I've learned web development myself without any course or coaching so don't expect too much from the source code xD.  
## About the project.
Drag and drop is implemented with native html5 drag and drop api with @drag, @dragend, @dragenter eventlisteners on the Card.vue component.  
Libraries like Vue.draggable were not used as i had to write most of the drag and drop logic according to the solitaire game type and I also had to MOVE the stack of cards.  
Ghost image in drag is removed instead the whole stack of card moves with cursor change.  

1.Rectangles are created in the code(rectangles.ts). A separate class has been created for them (Classes/Rectangle.ts).  
2.There is a canvas in HTML. It has the dimensions of the screen with margins on the edges.  
3.At the first launch, the application displays the created rectangles in a list, one below the other, at a small distance from each other.  
4.The user can move the rectangles on the canvas using the drag & drop mechanism.  
5.If the rectangle being moved intersects with others, then all intersecting shapes change the fill color to red. You can complete the move (make a drop) only if there are no intersections. Otherwise, the rectangle returns to its original position after the drop.  
6.As soon as one of the sides of the rectangle being moved approaches one of the sides of the other rectangle at a distance of <= intervalGluing, the rectangles interlock - that is, they become close to each other with the alignment of one of the edges of their sides.  
7.To uncouple the rectangles, you need to move them to a distance > intervalGluing from each other.  
## Project setup
1.`npm install`    
2.`npm run dev`
