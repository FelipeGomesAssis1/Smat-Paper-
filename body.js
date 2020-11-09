    body {
		padding: 20px 0px 200px;
	}
	h1.title {
		font-family: 'Roboto', sans-serif;
		font-weight: 900;
	}
	.calendar {
		margin: 0px 40px;
	}
	.popover.calendar-event-popover {
		font-family: 'Roboto', sans-serif;
		font-size: 12px;
		color: rgb(120, 120, 120);
		border-radius: 2px;
		max-width: 300px;
	}
	.popover.calendar-event-popover h4 {
		font-size: 14px;
		font-weight: 900;
	}
	.popover.calendar-event-popover .location,
	.popover.calendar-event-popover .datetime {
		font-size: 14px;
		font-weight: 700;
		margin-bottom: 5px;
	}
	.popover.calendar-event-popover .location > span,
	.popover.calendar-event-popover .datetime > span {
		margin-right: 10px;
	}
	.popover.calendar-event-popover .space,
	.popover.calendar-event-popover .attending {
		margin-top: 10px;
		padding-bottom: 5px;
		border-bottom: 1px solid rgb(160, 160, 160);
		font-weight: 700;
	}
	.popover.calendar-event-popover .space > .pull-right,
	.popover.calendar-event-popover .attending > .pull-right {
		font-weight: 400;
	}
	.popover.calendar-event-popover .attending {
		margin-top: 5px;
		font-size: 18px;
		padding: 0px 10px 5px;
	}
	.popover.calendar-event-popover .attending img {
		border-radius: 50%;
		width: 40px;
	}
	.popover.calendar-event-popover .attending span.attending-overflow {
		display: inline-block;
		width: 40px;
		background-color: rgb(200, 200, 200);
		border-radius: 50%;
		padding: 8px 0px 7px;
		text-align: center;
	}
	.popover.calendar-event-popover .attending > .pull-right {
		font-size: 28px;
	}
	.popover.calendar-event-popover a.btn {
		margin-top: 10px;
		width: 100%;
		border-radius: 3px;
	}
	[data-toggle="calendar"] > .row > .calendar-day {
		font-family: 'Roboto', sans-serif;
		width: 14.28571428571429%;
		border: 1px solid rgb(235, 235, 235);
		border-right-width: 0px;
		border-bottom-width: 0px;
		min-height: 120px;
	}
	[data-toggle="calendar"] > .row > .calendar-day.calendar-no-current-month {
		color: rgb(200, 200, 200);
	}
	[data-toggle="calendar"] > .row > .calendar-day:last-child {
		border-right-width: 1px;
	}

	[data-toggle="calendar"] > .row:last-child > .calendar-day {
		border-bottom-width: 1px;
	}

	.calendar-day > time {
		position: absolute;
		display: block;
		bottom: 0px;
		left: 0px;
		font-size: 12px;
		font-weight: 300;
		width: 100%;
		padding: 10px 10px 3px 0px;
		text-align: right;
	}
	.calendar-day > .events {
		cursor: pointer;
	}
	.calendar-day > .events > .event h4 {
		font-size: 12px;
		font-weight: 700;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-bottom: 3px;
	}
	.calendar-day > .events > .event > .desc,
	.calendar-day > .events > .event > .location,
	.calendar-day > .events > .event > .datetime,
	.calendar-day > .events > .event > .attending {
		display: none;
	}
	.calendar-day > .events > .event > .progress {
		height: 10px;
	}