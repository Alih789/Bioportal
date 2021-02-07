import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart';
import 'package:task_two_app/home.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    );
  }
}