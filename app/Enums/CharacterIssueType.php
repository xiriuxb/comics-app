<?php
namespace App\Enums;

enum CharacterIssueType:string{
    case Main = 'main';
    case Secondary = 'secondary';
    case Guest = 'guest';
    case Appearance = 'appearance';
}