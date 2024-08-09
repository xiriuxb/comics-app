<?php

use App\Enums\CharacterIssueType;
use App\Enums\SerieIssueTypes;
use App\Enums\SerieStatusTypes;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('editorials', function (Blueprint $table) {
            $table->id();
            $table->string('name', 32)->unique()->nullable(false);
            $table->string('code', 32)->unique()->nullable(false);
            $table->string('path', 512)->unique()->nullable(false);
            $table->string('description', 1024)->nullable();
            $table->timestamps();
        });

        Schema::create('author_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 24)->unique()->nullable(false);
            $table->string('description')->nullable();
            $table->timestamps();
        });

        Schema::create('authors', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('author_type_id');
            $table->string('name', 64)->unique()->nullable(false);
            $table->string('description')->nullable();
            $table->timestamps();

            $table->foreign('author_type_id')->references('id')->on('author_types');
        });

        Schema::create('series', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('editorial_id');
            $table->string('code', 64)->nullable(false);
            $table->string('name', 128)->unique()->nullable(false);
            $table->date('start_date')->nullable(false);
            $table->date('end_date')->nullable(false);
            $table->enum('status', [SerieStatusTypes::Canceled->value, SerieStatusTypes::Finished->value, SerieStatusTypes::Open->value])->default(SerieStatusTypes::Open->value)->nullable(false);
            $table->string('description')->nullable();
            $table->timestamps();

            $table->foreign('editorial_id')->references('id')->on('editorials');
        });

        Schema::create('issues', function (Blueprint $table) {
            $table->id();
            $table->unsignedDecimal('number', 5, 1);
            $table->string('title', 128)->nullable(true);
            $table->date('release_date')->nullable(true);
            $table->string('description', 1024)->nullable(true);
            $table->unsignedInteger('page_count')->nullable(true);
            $table->string('cover_image_url', 1024)->nullable(true);
            $table->string('isbn', 13)->nullable();
            $table->string('lang', 24);
            $table->timestamps();
        });

        Schema::create('serie_issue', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('serie_id')->nullable(false);
            $table->unsignedBigInteger('issue_id')->nullable(false);
            $table->enum('type', [SerieIssueTypes::Main->value, SerieIssueTypes::Other->value, SerieIssueTypes::TieIn->value])->default(SerieIssueTypes::Main->value)->nullable(false);
            $table->timestamps();

            $table->foreign('serie_id')->references('id')->on('series');
            $table->foreign('issue_id')->references('id')->on('issues');
        });

        Schema::create('author_issue', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('issue_id')->nullable(false);
            $table->unsignedBigInteger('author_id')->nullable(false);
            $table->timestamps();

            $table->foreign('author_id')->references('id')->on('authors');
            $table->foreign('issue_id')->references('id')->on('issues');
        });

        Schema::create('characters', function (Blueprint $table) {
            $table->id();
            $table->string('name', 128)->unique()->nullable(false);
            $table->string('code', 128)->unique()->nullable(false);
            $table->string('description', 1024)->nullable();
            $table->timestamps();
        });

        Schema::create('character_issue', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('character_id');
            $table->unsignedBigInteger('issue_id');
            $table->enum('status', [CharacterIssueType::Appearance->value, CharacterIssueType::Guest->value, CharacterIssueType::Main->value, CharacterIssueType::Secondary->value])->default(CharacterIssueType::Main->value);
            $table->timestamps();

            $table->foreign('character_id')->references('id')->on('character');
            $table->foreign('issue_id')->references('id')->on('issues');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropAllTables();
    }
};
