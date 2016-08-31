# SGF
Sidorkov &amp; Garbovskiy LESS Framework

## Синтаксис
```
.name {} 	  	    	 // @name: string
.nameProp {} 	 	    // @name: string, @Prop: integer
.name-Prop1-Prop2 {}   // @name: string, @Prop1, @Prop2: integer
.name-Prop {} 	      // @name: string, @Prop: integer

.mediaSize-name {} 	  	    	 // @mediaSize: string, @name: string
.mediaSize-nameProp {} 	 	    // @mediaSize: string, @name: string, @Prop: integer
.mediaSize-name-Prop1-Prop2 {} // @mediaSize: string, @name: string, @Prop1, @Prop2: integer
.name-mediaSize-Prop {} 	  // @mediaSize: string, @name: string, @Prop: integer
```

## @mediaSize префиксы
Вариант 1: sm-md-lg (small, medium, large)

Вариант 2: m-t-d (mobile, tablet, desktop)

Вариант 3: и sm-md-lg, и m-t-d

## Примеры по синтаксису
```
.text-left {
	text-align: left;
}
.mtop20 {
	margin-top: 20px;
}
.p-0-20 {
	padding: 0px 20px;
}
.w-50 {
	width: 50%;
}

.sm-text-left {
	text-align: left;
}
.md-mtop20 {
	margin-top: 20px;
}
.sm-p-0-20 {
	padding: 0px 20px;
}
.lg-w-50 {
	width: 50%;
}
```

## Основные правила
- Overflow:
  - hidden
  - scroll
	
- Box-sizing
  - border-box
  - content-box

- Images
  - img-response (alias: img-responsive)
	
- Displays
  - block
  - inline-block
  - table
  - none
	
- Vertical-aligns
  - mid
  - top
  - bot
	
- Floats
  - left
  - right
  - none

- Margins
  - auto (left, right)
  - 0 - 50   (inc: 5)
	
- Text-align
  - left
  - right
  - center
	
- Font-weight
  - 100 - 900

- Line-heights
  - 1.0
  - 1.5
	
- Text-decorations
  - none
  - underline

- Text-transforms
  - uppercase
	
- Positions
  - relative
  - absolute
  - static
  - fixed
	
- Cursors
  - default
  - pointer
	
- User-select
  - none
  - text
	
- Widths
  - 0%-100%