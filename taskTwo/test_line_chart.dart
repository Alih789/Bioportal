import 'package:flutter/material.dart';
import 'package:task_two_app/test_data.dart';
import 'package:charts_flutter/flutter.dart' as charts;


class LineCharts extends StatelessWidget{
  final List<testData> data;

  LineCharts({@required this.data});

  @override
  Widget build(BuildContext context){

    List<charts.Series<testData, int>> series = [
      charts.Series(
          id: "Subs",
          data: data,
          domainFn: (testData series, _) =>
          series.xVal,
          measureFn: (testData series, _) =>
          series.subscribers,
          colorFn: (_, __) => charts.MaterialPalette.blue.shadeDefault,

      )
    ];


    return Container(
      height: 400,
      padding: EdgeInsets.all(20),
      child: charts.LineChart(series, animate: true,),
    );



  }
}
