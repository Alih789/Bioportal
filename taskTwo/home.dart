import 'package:flutter/material.dart';
import 'package:task_two_app/test_bar_chart.dart';
import 'package:task_two_app/test_data.dart';
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:task_two_app/test_line_chart.dart';
import 'package:task_two_app/test_scatter_chart.dart';

class HomePage extends StatelessWidget{

  final List<testData> data = [
    testData(
      year: "2001",
      subscribers: 3452,
      xVal: 1,
      barColor: charts.ColorUtil.fromDartColor(Colors.blue),
    ),
    testData(
      year: "2004",
      subscribers: 6789,
      xVal: 2,
      barColor: charts.ColorUtil.fromDartColor(Colors.yellow),
    ),
    testData(
      year: "2007",
      subscribers: 9999,
      xVal: 3,
      barColor: charts.ColorUtil.fromDartColor(Colors.red),
    ),
  ];

  @override
  Widget build(BuildContext context){

    return Container(
      color: Colors.white,
      child: Column(
        children: <Widget>[
          Text("This is a Bar Chart", style: DefaultTextStyle.of(context).style.apply(fontSizeFactor: .2),),
          Expanded(child: BarCharts(data: data)),
          Text("This is a Line Chart", style: DefaultTextStyle.of(context).style.apply(fontSizeFactor: .2),),
          Expanded(child: LineCharts(data: data)),
          Text("This is a Scatter Plot", style: DefaultTextStyle.of(context).style.apply(fontSizeFactor: .2),),
          Expanded(child: ScatterCharts(data: data))
        ],
      )
    );
  }



}
