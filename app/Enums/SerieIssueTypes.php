<?php
namespace App\Enums;

enum SerieIssueTypes:string{
    case TieIn= 'tie-in';
    case Main= 'main';
    case Other= 'other';
}