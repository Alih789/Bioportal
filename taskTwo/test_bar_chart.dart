import 'package:flutter/material.dart';
import 'package:task_two_app/test_data.dart';
import 'package:charts_flutter/flutter.dart' as charts;


class BarCharts extends StatelessWidget{
  final List<testData> data;

  BarCharts({@required this.data});

  @override
  Widget build(BuildContext context){

    List<charts.Series<testData, String>> series = [
      charts.Series(
        id: "Subs",
        data: data,
        domainFn: (testData series, _) =>
            series.year,
        measureFn: (testData series, _) =>
            series.subscribers,
        colorFn: (testData series, _) =>
            series.barColor
      )
    ];


    return Container(
      height: 400,
      padding: EdgeInsets.all(20),
      child: charts.BarChart(series, animate: true,),
    );



  }
}
