<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\WikiResource;
use App\Models\Wiki;
use Illuminate\Http\Request;

class WikiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return WikiResource::collection(Wiki::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(WikiRequest $request)
    {
        $wiki = Wiki::create( $request->validated() );
        return new WikiResource( $wiki );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Wiki  $wiki
     * @return \Illuminate\Http\Response
     */
    public function show(Wiki $wiki)
    {
        return new WikiResource( $wiki );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Wiki  $wiki
     * @return \Illuminate\Http\Response
     */
    public function update(WikiRequest $request, Wiki $wiki)
    {
        $wiki->update($request->validated());
        return new WikiResource( $wiki );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Wiki  $wiki
     * @return \Illuminate\Http\Response
     */
    public function destroy(Wiki $wiki)
    {
        $wiki->delete();
        return response()->noContent();
    }
}
