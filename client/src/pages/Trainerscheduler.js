import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { Alert } from 'reactstrap';

class Trainerscheduler extends React.Component {
    constructor() {
        super(...arguments);
        this.data = [{
                Id: 2,
                Subject: 'Meet Your Trainers',
                StartTime: new Date(2021, 5, 23, 10, 0),
                EndTime: new Date(2021, 5, 23, 11, 30),
                RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
            }];
    }


    render() {
        return (
		<div>
<ScheduleComponent height='850px' selectedDate={new Date(2021, 5, 23)} eventSettings={{ dataSource: this.data }}>
<Inject style={{backgroundColor: "green"}} services={[Day, Week, WorkWeek, Month, Agenda]}/>
</ScheduleComponent>
<div>
<Alert color="dark">
        Please select desired appointment time and date. Don't schedule appointment on the gray box or double-book a trainer. If you wish to change your appointment or delete it, make sure to come back here to update that- Enjoy your session!
      </Alert>
</div>
</div>
		)
    }
}
export default Trainerscheduler;

